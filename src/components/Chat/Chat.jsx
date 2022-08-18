import React, { useState, useEffect, useContext } from "react";
import Conversation from "./Conversation/Conversation"
import Loader from "../../components/Loader/Loader"
import Image from "next/image"
import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ProfileContext } from "../../contexts/ProfileContext";
import styles from "./chat.module.css"

const Chat = () => {
  const { theme } = useContext(ThemeContext);
  const { profile, loading, error } = useContext(ProfileContext);

  const {data} = useRequest(`${ENDPOINT}/chat/${profile?._id}`)
  
  if(data !== undefined) {
    return (
      <div className={theme ? `${styles.chat_container} light_mode` : `${styles.chat_container} dark_mode`}>
      <div className={styles.chat_user}>
      <Image src={profile?.profilePicture.secure_url} width={60} height={60} alt={`Foto de perfil de ${profile.userName}`}/>
      <h3>{profile?.userName}</h3>
      </div>
        <div className={styles.chat_list}>
          {data && data.map((chat) => (
            <>
              <Conversation chats={chat} currentUserId={profile._id}/>
            </>
           ))}
        </div>
      </div>
    )
  }
  if(loading) {
    return (
      <Loader/>
    )
  }
  if(error || data === undefined) {
    return (
      <>
        <h2>Ops, se ha producido un error</h2>
      </>
    )
  }
  
}

export default Chat