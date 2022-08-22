import React, { useState, useEffect, useContext } from "react";
import styles from "./conversation.module.css";

const Conversation = ({
  children,
  data,
  back,
  userChat,
  createMessage,
  sendMessage,
}) => {
  return (
    <div className={styles.container_conversation}>
      <div className={styles.container_user_conversation}>
        {back}
        {userChat}
      </div>

      <div className={styles.container_messages}>
        {children}
      </div>

      <div className={styles.footer_conversation}>
        {createMessage} {sendMessage}
      </div>
    </div>
  );
};

export default Conversation;
