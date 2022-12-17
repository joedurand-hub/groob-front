import React, {memo} from "react";
import Image from "next/image";
import styles from "./userConnected.module.css";

const UserConnected = ({ online, profilePicture, verified, width, height }) => {
 
  return (
    <div
      className={styles.chat_user}
    >
      <div className={online === true ? styles.online_dot : styles.offline_dot}></div>
      <Image
        className={styles.user_online}
        src={profilePicture && profilePicture}
        width={width}
        height={height}
        objectFit="cover"
        alt="Profile picture"
      />
    </div>
  );
};

export default memo(UserConnected);
