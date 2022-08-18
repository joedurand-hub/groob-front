import React, { useState, useEffect, useContext } from "react";
import Conversation from "./Conversation/Conversation";
import Image from "next/image";
import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./chat.module.css";

const Chat = ({ dato }) => {
  const { theme } = useContext(ThemeContext);

  const { data } = useRequest(`${ENDPOINT}/chat/${dato?._id}`);

  if (dato !== undefined) {
    return (
      <div
        className={
          theme
            ? `${styles.chat_container} light_mode`
            : `${styles.chat_container} dark_mode`
        }
      >
        <div className={styles.chat_user}>
        {dato?.online === true && (
        <div className={styles.online_dot}></div>
        )}
          <Image className={styles.user_online} src={dato?.profilePicture.secure_url} width={60} height={60} />
          <h5>
            <strong>{dato?.userName}</strong>
          </h5>
        </div>
        <div className={styles.chat_list}>
          {data &&
            data.map((chat) => (
              <>
                <Conversation chats={chat} currentUserId={dato._id} />
              </>
            ))}
        </div>
      </div>
    );
  }
};

export default Chat;
