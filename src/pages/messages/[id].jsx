import React, { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import CreateMessage from "../../components/Conversation/CreateMessage/CreateMessage";
import SendMessage from "../../components/Conversation/SendMessage/SendMessage";
import Message from "../../components/Conversation/Message/Message";
import GoBack from "../../components/GoBack/Back";
import Conversation from "../../components/Conversation/Conversation";
import axios from "axios";

const Messages = ({ datas }) => {
  console.log(datas);
  const token = getCookie("authToken");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessage = (newMessage) => {
    setNewMessage(newMessage)
  }

  useEffect(() => {
    try {
      const getMessages = async () => {
        const { data } = await axios.get(
          `http://localhost:8080/message/${datas?.chat._id}`,
          { headers: { authToken: token } },
          { withCredentials: true }
        );
        console.log(data);
        setMessages(data);
      };

      if (datas.chat !== null || datas.chat !== undefined) getMessages();
    } catch (error) {
      console.log(error);
    }
  }, []);
console.log(messages)
  return (
    <div>
      <Conversation
        back={<GoBack path="/messages" />}
        userChat={
          <ChatUser
            profilePicture={datas?.profilePicture}
            userName={datas?.userName}
            width={50}
            height={50}
          />
        }
        
        createMessage={<CreateMessage value={newMessage && newMessage} onChange={handleMessage} />}
        sendMessage={<SendMessage />}
      >
        <hr/>
         {messages.chat?.map(msj => (
            <Message 
              senderId={msj.senderId} 
              myId={messages.myId}
              profilePicture={datas?.profilePicture}
              text={msj.text}
              createdAt={msj.createdAt}
            />
         ))}  
      </Conversation>
    </div>
  );
};
export default Messages;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const { id } = query;
    const response = await fetch(
      `http://localhost:8080/chat/${id}`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
      }
    );
    const datas = await response.json();
    return {
      props: {
        datas,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
