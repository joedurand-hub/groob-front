import React from "react";
import ChatUser from "../ChatUser/ChatUser";

const ChatList = ({ users }) => {

  return (
    <div>
      {users?.map((user) => (
        <ChatUser 
        key={user?.id}
          id={user?.id}
          userName={user?.userName}
          profilePicture={user?.profilePicture}
          online={user?.online}
          width={60}
          height={60}
        />
      ))}
    </div>
  );
};

export default ChatList;
