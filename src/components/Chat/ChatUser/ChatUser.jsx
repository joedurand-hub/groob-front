import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styles from "./chatUser.module.css";
import UserConnected from "../UserConnected/UserConnected";

const ChatUser = ({ userName, profilePicture, online, id, width, height }) => {
  const router = useRouter();
  return (
    <div
      className={styles.container_user}
      onClick={() => router.push(`/messages/${id}`)}
    >
      <UserConnected
        profilePicture={profilePicture}
        online={online}
        id={id}
        width={width}
        height={height}
      />
      <h5 className={styles.user_name}>
        <strong>{userName && userName}</strong>
      </h5>
    </div>
  );
};

export default ChatUser;
