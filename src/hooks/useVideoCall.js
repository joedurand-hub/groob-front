import { useState, useEffect } from 'react';
import { createSubscription, createStream } from 'next/stream';

export const useVideoCall = (options) => {
  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  useEffect(() => {
    if (!localStream || !remoteStream) {
      return;
    }

    const { peer, initiator } = options;

    if (initiator) {
      const subscription = createSubscription(peer, localStream);
      subscription.on('data', (stream) => setRemoteStream(stream));
      return () => subscription.close();
    } else {
      const stream = createStream(peer, localStream);
      setRemoteStream(stream);
      return () => stream.close();
    }
  }, [options, localStream, remoteStream]);

  return { localStream, setLocalStream, remoteStream };
}

// import { useVideoCall } from './useVideoCall';

// function MyVideoCallComponent({ peer, initiator }) {
//   const { localStream, setLocalStream, remoteStream } = useVideoCall({ peer, initiator });

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => setLocalStream(stream))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {localStream && (
//         <video src={localStream} autoPlay muted />
//       )}
//       {remoteStream && (
//         <video src={remoteStream} autoPlay />
//       )}
//     </div>
//   );
// }