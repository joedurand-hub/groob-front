import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const onChange = e => {
    setUploadedFile(e.target.files[0]);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', uploadedFile);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setVideoUrl(res.data.filePath);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      {!videoUrl && (
        <form onSubmit={onSubmit}>
          <input type="file" onChange={onChange} />
          <button type="submit">Upload Video</button>
        </form>
      )}
      {videoUrl && (
        <video src={videoUrl} controls />
      )}
    </div>
  );
}

export default App;