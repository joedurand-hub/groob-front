import { useEffect, useState } from 'react';

export const useWebSpeech = () => {
  const [speech, setSpeech] = useState('');

  useEffect(() => {
    if (!('SpeechRecognition' in window)) {
      console.error('Este navegador no soporta el reconocimiento de voz');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'es-ES';

    recognition.addEventListener('result', (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setSpeech(transcript);
        } else {
          interimTranscript += transcript;
        }
      }
      setSpeech(interimTranscript);
    });

    recognition.start();

    return () => {
      recognition.abort();
    };
  }, []);

  return speech;
}

// import { useWebSpeech } from './useWebSpeech';

// function MyComponent() {
//   const speech = useWebSpeech();

//   return <div>{speech}</div>;
// }