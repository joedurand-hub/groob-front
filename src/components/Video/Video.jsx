import { useState, useRef } from "react";
import styles from "./video.module.css";

const Video = ({ src }) => {
  const [playing, setPlaying] = useState();
  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoEl } = video;
    if (playing) {
      videoEl.pause();
    } else {
      videoEl.play();
    }
    setPlaying(!playing);
  };
  return (
    <div className={styles.container_video}>
      <video
        onClick={handlePlay}
        className={styles.video}
        ref={video}
        autoPlay
        loop
        muted
        controls
        src="https://v16-webapp.tiktok.com/0a20a751abd662ebec31269a3455a815/639db5db/video/tos/useast2a/tos-useast2a-pve-0068/o0fdRR5tjIJBERBUFBneJmZDUlnQ4JAlwQb0oS/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2794&bt=1397&cs=0&ds=3&ft=IecA0ojyD12Nv7A4EZIxRnsNolJG-UjNSpgpi9&mime_type=video_mp4&qs=0&rc=OmdkZzw3MzY1PDxoZjU3NkBpanllNWQ6ZnZraDMzNzczM0A1MzNeYjE1NmExNTNjLmIxYSNwMl5icjQwYGJgLS1kMTZzcw%3D%3D&l=20221217062803B1C1FE6308694D8A2A04&btag=80000"
      />
    </div>
  );
};

export default Video;
