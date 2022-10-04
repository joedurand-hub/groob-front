import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./putProfile.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import usePut from "../../hooks/usePut";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { Toaster, toast } from "react-hot-toast";

const UpdatePicture = ({ id }) => {
  const router = useRouter();
  const [profilePicture, setProfilePicture] = useState(null);
  const { info, pending, error, sendUpdatedData } = usePut();

  const handleFilesLoad = (e) => {
    setProfilePicture(e);
  };

  const handleSubmit = () => {
    const body = new FormData();
    for (let index = 0; index < profilePicture.length; index++) {
      body.append("image", profilePicture[index]);
    }
    sendUpdatedData({
      endpoint: `http://localhost:8080/picture/${id}`,
      putData: body,
    });
    setProfilePicture(null);
  };
  useEffect(() => {
    if (info !== undefined) {
      router.reload(window.location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  return (
    <div className={styles.container_upload_image}>
      {info !== undefined &&
        info.pictureUpdated &&
        toast.success("Foto Actualizada!", {
          position: "top-center",
          autoClose: "1000",
        })}
      {error !== undefined &&
        toast.error("¡Ups! Ha habido un error.", {
          position: "top-center",
          autoClose: "1000",
        })}
      <Toaster />
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
