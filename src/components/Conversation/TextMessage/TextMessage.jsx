import React from "react";
import styles from "./textMessage.module.css"

const TextMessage = ({text, created}) => {
  return (
    <>
      <p className={styles.messages}>{text}</p>
      <span className={styles.date}>{created}</span>
    </>
  );
};

export default TextMessage;
