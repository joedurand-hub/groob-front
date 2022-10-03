import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./chat.module.css";


const Chat = ({ children }) => {
  const { theme } = useContext(ThemeContext);
    return (
      <div className={
        theme
        ? `${styles.chat_light}`
        : `${styles.chat_dark}`
      }>
        <div className={
                  theme
                  ? `${styles.chat_list}`
                  : `${styles.chat_list}`
          }>
          {children}
        </div>

      </div>
    );
};

export default Chat;
