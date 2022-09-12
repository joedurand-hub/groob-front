import React, { useMemo, memo } from "react";
import ChatUser from "../ChatUser/ChatUser";
import styles from "./chatList.module.css"

const ChatList = ({ users }) => {
  const chats = useMemo(() => {
    return users?.sort((a, b) => {
      if (a.updatedAt < b.updatedAt) return 1;
      return -1;
    })      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);
  
  console.log(chats)
  return (
    <div className={styles.list}>
      {chats?.map((chat) => (
        <ChatUser 
        key={chat?.id}
          id={chat?.id}
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
