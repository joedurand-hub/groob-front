import React from "react";
import ChatUser from "../ChatUser/ChatUser";

const ChatList = ({ chatsId, users }) => {
  console.log(chatsId, users);

  return (
    <div>
      {users.map((user) => (
        <ChatUser
          id={user?.id}
          userName={user?.userName}
          profilePicture={user?.profilePicture}
          online={user?.online}
        />
      ))}
    </div>
  );
};

export default ChatList;
