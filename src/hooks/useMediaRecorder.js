import { useEffect, useState } from 'react';

export const useMediaRecorder = (stream, options) => {
  const [blob, setBlob] = useState(null);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!('MediaRecorder' in window)) {
      console.error('Este navegador no soporta la grabación de medios');
      return;
    }

    let mediaRecorder;
    try {
      mediaRecorder = new MediaRecorder(stream, options);
    } catch (e) {
      setError(e);
      return;
    }

    mediaRecorder.addEventListener('dataavailable', (event) => {
      setBlob(event.data);
    });

    const start = () => {
      mediaRecorder.start();
      setRecording(true);
    };
    const stop = () => {
      mediaRecorder.stop();
      setRecording(false);
    };

    return () => {
      mediaRecorder.abort();
    };
  }, [stream, options]);

  return { blob, recording, error, start, stop };
}

// import { useMediaRecorder } from './useMediaRecorder';

// function MyComponent() {
//   const stream = useMediaStream(); // Obtener el stream de medios a través de la API de navigator.mediaDevices
//   const { blob, recording, error, start, stop } = useMediaRecorder(stream, {
//     mimeType: 'audio/webm',
//   });

//   return (
//     <div>
//       {error && <div>{error.message}</div>}
//       {recording ? (
//         <button onClick={stop}>Detener</button>
//       ) : (
//         <button onClick={start}>Grabar</button>
//       )}
//       {blob && (
//         <a
//           href={URL.createObjectURL(blob)}
//           download="grabación.webm"
//         >
//           Descargar grabación
//         </a>
//       )}
//     </div>
//   );
// }