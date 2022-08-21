import React, { useState, useEffect, useContext } from "react";
import styles from "./conversation.module.css";

const Conversation = ({
  children,
  data,
  back,
  userChat,
  message,
  createMessage,
  sendMessage,
}) => {
  return (
    <div className={styles.container_conversation}>
      <div className={styles.container_user_conversation}>
        {back}
        {userChat}
      </div>

      <div>
        {message}
        {/* <p>{data?.chat.messages?.[0]}</p> */}
      </div>

      <div className={styles.footer_conversation}>
        {createMessage} {sendMessage}
      </div>
    </div>
  );
};

export default Conversation;
