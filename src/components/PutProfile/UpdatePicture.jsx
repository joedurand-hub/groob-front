import styles from "./putProfile.module.css";
import {BsPlusCircleFill} from "react-icons/bs"

const UpdatePicture = () => {
  return (
      <div className={styles.container_upload_image}>
        <label htmlFor="upload">
          <BsPlusCircleFill className={styles.upload} />
        </label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={(e) => handleFilesLoad(e.target.files)}
          className={styles.input_upload}
        />
      </div>
  );
};

export default UpdatePicture;
