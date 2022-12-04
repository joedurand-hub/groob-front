import React, { useState } from 'react';
import { RecordRTC, StereoAudioRecorder } from 'recordrtc';

function AudioRecorder() {
  const [recorder, setRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const startRecording = () => {
    // Create an audio recorder using the RecordRTC library
    const audioRecorder = new RecordRTC(new StereoAudioRecorder(), {
      type: 'audio',
      mimeType: 'audio/wav',
      sampleRate: 48000,
      numberOfAudioChannels: 1,
      desiredSampRate: 16000
    });

    // Start recording audio
    audioRecorder.startRecording();

    // Save the recorder instance so we can access it later
    setRecorder(audioRecorder);
  };

  const stopRecording = () => {
    // Stop recording audio
    recorder.stopRecording(() => {
      // Save the audio as a Blob
      setAudioBlob(recorder.getBlob());
    });
  };

  const uploadAudio = () => {
    // Use the Fetch API to upload the audio to your server
    fetch('/upload', {
      method: 'POST',
      body: audioBlob
    });
  };

  const playAudio = () => {
    // Use the HTML5 audio element to play the recorded audio
    const audioElement = document.createElement('audio');
    audioElement.src = URL.createObjectURL(audioBlob);
    audioElement.play();
  };
}

export default AudioRecorder;
