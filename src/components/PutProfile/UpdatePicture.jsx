import { useState } from "react";
import styles from "./putProfile.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import usePut from "../../hooks/usePut";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const UpdatePicture = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const { info, pending, error, sendUpdatedData } = usePut();

  const handleFilesLoad = (e) => {
    setProfilePicture(e);
  };

  const handleSubmit = () => {
    const body = new FormData();
    for (let index = 0; index < profilePicture.length; index++) {
      console.log(profilePicture[index])
      body.append("image", profilePicture[index]);
    }
    sendUpdatedData({
      endpoint: "http://localhost:8080/picture/631689a643b3285ff55b5591",
      putData: body,
    });
    setProfilePicture(null)
  };
  
  return (
    <div className={styles.container_upload_image}>
      {profilePicture !== null && (
        <div style={{ zIndex: 10 }}>
          <Button
            name="Subir"
            variant="primary"
            onClick={() => handleSubmit()}
          />
        </div>
      )}
      {pending ? (
        <Loader />
      ) : (
        <>
          <label htmlFor="imagePicture">
            <BsPlusCircleFill className={styles.upload} />
          </label>
          <input
            type="file"
            accept="image/*"
            maxLength={1}
            onChange={(e) => handleFilesLoad(e.target.files)}
            id="imagePicture"
            className={styles.input_upload}
          />
        </>
      )}
    </div>
  );
};

export default UpdatePicture;
