

///////////////////////////

// Este componente contiene todos los chats

///////////////////////////

import styles from "./chat.module.css";

const Chat = ({ children }) => {

    return (
      <div>
        <div className={styles.chat_list}>
          {children}
        </div>

      </div>
    );
};

export default Chat;
