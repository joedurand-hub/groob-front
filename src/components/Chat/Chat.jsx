import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./chat.module.css";


const Chat = ({ children }) => {
  const { theme } = useContext(ThemeContext);
    return (
      <div className={
        theme
        ? `${styles.chat} light_mode`
        : `${styles.chat} dark_mode`
      }>
        <div className={
                  theme
                  ? `${styles.chat_list} light_mode`
                  : `${styles.chat_list} dark_mode`
          }>
          {children}
        </div>

      </div>
    );
};

export default Chat;
