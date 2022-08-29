import React, { memo } from "react";
import ChatUser from "../ChatUser/ChatUser";
import styles from "./chatList.module.css"

const ChatList = ({ users }) => {

  return (
    <div className={styles.list}>
      {users?.map((user) => (
        <ChatUser 
        key={user?.id}
          id={user?.id}
          userName={user?.userName}
          profilePicture={user?.profilePicture}
          online={user?.online}
          width={55}
          height={55}
        />
      ))}
    </div>
  );
};

export default memo(ChatList);
