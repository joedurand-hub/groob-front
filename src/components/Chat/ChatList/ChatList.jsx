import React, { useMemo, memo } from "react";
import ChatUser from "../ChatUser/ChatUser";
import styles from "./chatList.module.css"

const ChatList = ({ users }) => {
  console.log(users)
  const chats = users?.sort((a, b) => {
      if (a.updated < b.updated) return 1;
      return -1;
    })      
  
  return (
    <div className={styles.list}>
      {chats?.map((chat) => (
        <ChatUser 
        key={chat?.id}
          id={chat?.id}
          verified={chat?.verified}
          userName={chat?.userName}
          profilePicture={chat?.profilePicture}
          online={chat?.online}
          width={55}
          height={55}
        />
      ))}
    </div>
  );
};

export default memo(ChatList);
