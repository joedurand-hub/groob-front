import React, { useState } from "react";
import axios from "axios";
import { screenShare } from "screen-share";
import "./StreamingComponent.css";

const StreamingComponent = () => {
  const [stream, setStream] = useState(null);
  const [camera, setCamera] = useState(null);

  const liveStreaming = async () => {
    try {
      // Iniciamos la captura de pantalla y la cámara
      const screenStream = await screenShare.start({
        width: 720,
        height: 480,
        frameRate: 30,
      });
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Combinamos ambos flujos en uno solo
      const combinedStream = new MediaStream();
      screenStream.getTracks().forEach((track) => {
        combinedStream.addTrack(track);
      });
      cameraStream.getTracks().forEach((track) => {
        combinedStream.addTrack(track);
      });

      // Guardamos el flujo combinado en el estado y lo reproducimos en el video
      setStream(combinedStream);
      setCamera(cameraStream);
    } catch (error) {
      console.error(error);
    }
  };

  const stopStreaming = () => {
    // Detenemos la captura de pantalla y la cámara
    screenShare.stop();
    camera.getTracks().forEach((track) => {
      track.stop();
    });
    // Detenemos la reproducción del video y limpiamos el estado
    setStream(null);
    setCamera(null);
  };

  const uploadStream = async () => {
    try {
      // Convertimos el flujo en un archivo Blob
      const blob = new Blob(stream, { type: "video/webm" });
      // Subimos el archivo a Cloudinary
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "YOUR_UPLOAD_PRESET");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload",
        formData
      );
      // Guardamos la URL del vídeo en la base de datos
      const videoURL = response.data.secure_url;
      const savedVideo = await Video.create({ url: videoURL });
      // Mostramos el vídeo subido en pantalla
      setStream(savedVideo.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="streaming-container">
      <video src={stream} autoPlay playsInline />
      <div className="controls-container">
        <button onClick={liveStreaming}>Start Streaming</button>
        <button onClick={stopStreaming}>Stop Streaming</button>
        <button onClick={uploadStream}>Upload Video</button>
      </div>
    </div>
  );
};
export default StreamingComponent;
