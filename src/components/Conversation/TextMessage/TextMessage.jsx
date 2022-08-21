import React from "react";
import styles from "./textMessage.module.css"

const TextMessage = ({text}) => {
  return (
    <>
      <p className={styles.messages}>{text}</p>
    </>
  );
};

export default TextMessage;
