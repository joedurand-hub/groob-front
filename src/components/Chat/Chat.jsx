import React, { useState, useEffect, useContext } from "react";
import Conversation from "./Conversation/Conversation";
import Image from "next/image";
import useRequest from "../../hooks/useRequest";
import { useModal } from "../../hooks/useModal"
import Modal  from "./Modal/Modal"
import { ENDPOINT } from "../../helpers/constants";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./chat.module.css";
import ChatBox from "./ChatBox/ChatBox";

import ProfilePicture from "./ProfilePicture/ProfilePicture"

const Chat = ({ user, children }) => {
  const [currentChat, setCurrentChat] = useState(null)
  console.log(currentChat)
  const [isOpenModalChat, openModalChat, closeModalChat] = useModal(false);
  const { theme } = useContext(ThemeContext);

  if (user !== undefined) {
    return (
      <div
        className={
          theme
            ? `${styles.chat_container} light_mode`
            : `${styles.chat_container} dark_mode`
        }
      >
        <div className={styles.chat_user}>
        {user?.online === true && (
        <div className={styles.online_dot}></div>
        )}
          <Image className={styles.user_online} src={user?.profilePicture.secure_url} width={60} height={60} />
          <h5>
            <strong>{user?.userName}</strong>

          </h5>
        </div>
        <div className={styles.chat_list}>
          {children}
        </div>
        <Modal  isOpen={isOpenModalChat} closeModal={closeModalChat}>
          {/* <ProfilePicture /> */}
              {/* <ChatBox chat={currentChat} currentUser={user._id}/> */}
</Modal>
      </div>
    );
  }
};

export default Chat;
