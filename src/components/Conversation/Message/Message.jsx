import React from "react";
import Image from "next/image";
import TextMessage from "../TextMessage/TextMessage";
import timeago from "../../../helpers/timeago";
import styles from "./message.module.css";

const Message = ({ profilePicture, text, createdAt, senderId, myId }) => {
  return (
    <>
    {senderId === myId ? (
      <div className={styles.container_send_message}>
        <div className={styles.send_message}>
          <TextMessage
            text={text}
            created={timeago(createdAt)}
            />
        </div>
        </div>
      ) : (
        <div className={styles.container_recived_message}>
          <Image
            className={styles.profile_image_message}
            src={profilePicture}
            width={45}
            height={45}
            alt={"Foto de perfil"}
            />
        <div className={styles.recived_message}>
          <TextMessage
            className={styles.recived_message}
            text={text}
            created={timeago(createdAt)}
            />
        </div>
        </div>
      )}
      </>
  );
};
export default Message;
