import React, {memo} from "react";
import Image from "next/image";
import styles from "./userConnected.module.css";

const UserConnected = ({ online, profilePicture, width, height }) => {

  return (
    <div
      className={styles.chat_user}
    >
      {online === true && <div className={styles.online_dot}></div>}
      <Image
        className={styles.user_online}
        src={profilePicture && profilePicture}
        width={width}
        height={height}
      />
    </div>
  );
};

export default memo(UserConnected);
