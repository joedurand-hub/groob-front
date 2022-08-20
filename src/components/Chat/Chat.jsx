

///////////////////////////

// Este componente contiene todos los chats

///////////////////////////

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./chat.module.css";
import { getCookie } from "cookies-next";

const Chat = ({ user, children }) => {
  

    return (
      <div>
        <div className={styles.chat_list}>
          {children}
        </div>

      </div>
    );
};

export default Chat;
