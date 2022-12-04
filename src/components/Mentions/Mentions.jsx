import React, { useState } from 'react';
import axios from 'axios';

function CommentInput() {
  const [comment, setComment] = useState('');
  const [mentionSuggestions, setMentionSuggestions] = useState([]);

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar comentario a la API de la red social
  }

  const handleMention = async (event) => {
    const regex = /@([A-Za-z0-9_]+)/;
    const match = regex.exec(comment);
    if (match) {
      const username = match[1];
      try {
        const response = await axios.get('/api/users', {
          params: {
            username,
          },
        });
        const users = response.data.map((user) => ({
          username: user.username,
          profilePicture: user.profilePicture,
        }));
        setMentionSuggestions(users);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMentionSuggestions([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={handleChange} onKeyDown={handleMention} />
      {mentionSuggestions.length > 0 && (
        <ul>
          {mentionSuggestions.map((user) => (
            <li key={user.username}>
              <img src={user.profilePicture} alt={user.username} />
              {user.username}
            </li>
          ))}
        </ul>
      )}
      <button type="submit">Enviar comentario</button>
    </form>
  );
}

export default CommentInput;