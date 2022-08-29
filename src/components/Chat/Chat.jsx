

///////////////////////////

// Este componente contiene todos los chats

///////////////////////////

import styles from "./chat.module.css";
const Chat = ({ children }) => {

    return (
      <div className={styles.chat}>
        <div className={styles.chat_list}>
          {children}
        </div>

      </div>
    );
};

export default Chat;
