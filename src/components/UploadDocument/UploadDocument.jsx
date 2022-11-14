import { useState, useEffect } from "react";
import Image from "next/image";
import Frente from "../../../public/DNI-Frente.png";
import Dorso from "../../../public/DNI-Dorso.png";
import styles from "./uploadDocument.module.css";
import Button from "../Button/Button";
import usePostPublication from "../../hooks/usePostPublication";

const UploadDocument = () => {
  const { data, pending, error, sendPublication } = usePostPublication();
  const [files, setFiles] = useState("");

  const handleFilesLoad = (e) => {
    setFiles(e);
  };

  const handleUploadDocuments = (e) => {
    e.preventDefault();
    const body = new FormData();
    for (let index = 0; index < files.length; index++) {
      body.append("images", files[index]);
    }
    sendPublication({
      endpoint: url,
      postData: body,
      token: token,
    });
    e.target.reset();
    setLengthValue(0);
  };

  return (
    <div className={styles.container_documents}>
      <div className={styles.documents_header}>
        <h1 >¡Hora de verificarte!</h1>
        <h6>
          Para poder hacerlo deberás tener: <br />
          <strong>.</strong> Foto de perfil con tu cara visible. <br />
          <strong>.</strong> Cargar fotos del frente y dorso de tu DNI.
        </h6>
        <br />
        Tras finalizar el proceso, las fotos de tu documento serán borradas
        automáticamente y podrás .
      </div>
      <h2>Frente</h2>
      <label htmlFor="imagePicture">
        <Image height={150} width={300} src={Frente} alt="Imagen frontal del documento de identidad"/>
      </label>
      <br />
      <h2>Dorso</h2>
      <label htmlFor="imagePicture">
        <Image height={150} width={300} src={Dorso} alt="Imagen del dorso del documento de identidad"/>
      </label>
      <br />
      <div className={styles.container_submit}>
        <Button
          name="Enviar"
          variant="primary"
          onSubmit={handleUploadDocuments}
        />
      </div>
    </div>
  );
};

export default UploadDocument;
