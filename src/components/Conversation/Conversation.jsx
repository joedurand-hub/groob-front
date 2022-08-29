import React, { useContext } from "react";
import styles from "./conversation.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Conversation = ({ children, back, userChat }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container_conversation} light_mode`
          : `${styles.container_conversation} dark_mode`
      }
    >
      <div className={styles.container_user_conversation}>
        {back}
        {userChat}
      </div>

      <div className={styles.container_messages}>{children}</div>
    </div>
  );
};

export default Conversation;
