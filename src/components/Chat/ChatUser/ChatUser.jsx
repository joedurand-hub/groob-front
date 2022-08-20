import React, { useState, useEffect, useContext } from "react";
import styles from "./chatUser.module.css"
import Image from "next/image";
import Loader from "../../Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { useRouter } from "next/router"

const ChatBox = ({userName, profilePicture, online, id}) => {
  const router = useRouter()

    return (
      <>
      <div className={styles.chat_user} onClick={() => router.push(`/messages/${id}`)}  >
      {online === true && (
      <div className={styles.online_dot}></div>
      )}
        <Image className={styles.user_online} src={profilePicture && profilePicture} width={60} height={60} />
        <h5>
          <strong>{userName && userName}</strong>

        </h5>
      </div>
      </>
  )
}

export default ChatBox