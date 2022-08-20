import React, { useState, useEffect, useContext } from "react";
import styles from "./chatUser.module.css"
import Image from "next/image";
import Loader from "../../Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";

const ChatBox = ({}) => {
    const [userData, setUserData] = useState(null)

    return (
      <div className={styles.chat_user}>
      {user?.online === true && (
      <div className={styles.online_dot}></div>
      )}
        <Image className={styles.user_online} src={user?.profilePicture.secure_url} width={60} height={60} />
        <h5>
          <strong>{user?.userName}</strong>

        </h5>
      </div>
  )
}

export default ChatBox