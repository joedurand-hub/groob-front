import React, { useState, useEffect, useRef } from "react";
import { getCookie } from "cookies-next";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import SendMessage from "../../components/Conversation/SendMessage/SendMessage";
import Message from "../../components/Conversation/Message/Message";
import GoBack from "../../components/GoBack/Back";
import Conversation from "../../components/Conversation/Conversation";
import axios from "axios";
import InputEmoji from "react-input-emoji";
import { io } from "socket.io-client";
import CreateMessage from "../../components/CreateMessage/CreateMessage";

const Messages = ({ datas }) => {
  const token = getCookie("authToken");

  const [messages, setMessages] = useState([]); //traigo todos los mensajes
  const [chat, setChat] = useState([]);
  const [newMessage, setNewMessage] = useState(""); // onChange de nuevos mensajes
  const [reciveMessage, setReciveMessage] = useState(null);
  const [newSocketMessage, setNewSocketMessage] = useState(null);
  const socket = useRef();
  const reciverId = datas?.chat.members.find(user => user !== datas?.myId)

  useEffect(() => {
    try {
      const getMessages = async () => {
        const { data } = await axios.get(
          `http://localhost:8080/message/${datas?.chat._id}`,
          { headers: { authToken: token } },
          { withCredentials: true }
        );

        setMessages(data);
        setChat(data.chat);
      };
      if (datas.chat !== null || datas.chat !== undefined) getMessages();
    } catch (error) {
      console.log(error);
    }
  }, [reciveMessage]);

  const handleMessage = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSendMessage = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/message`,
        {
          chatId: datas?.chat._id,
          senderId: messages.myId,
          text: newMessage,
        },
        { headers: { authToken: token } },
        { withCredentials: true }
      );
      setChat([...chat, data]);
      setNewSocketMessage(data);
      setNewMessage("");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
      socket.current = io("http://localhost:8080");
      if(newSocketMessage !== null) {
        socket.current.emit("newMessage", {newSocketMessage, reciverId});
      }
  }, [newSocketMessage]);

  useEffect(() => {
      socket.current = io("http://localhost:8080");
      socket.current.on("receiveMessage", (newMessage) => {
        setReciveMessage(newMessage);
      });
  }, [reciveMessage]);

  return (
    <>
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
      >
        <br/>
        {chat?.map((msj, index) => (
          <Message
            key={index}
            senderId={msj.senderId}
            myId={messages.myId}
            profilePicture={datas.profilePicture}
            text={msj.text}
            createdAt={msj.createdAt}
          />
        ))}
      </Conversation>
        <CreateMessage newMessage={newMessage} handleSendMessage={handleSendMessage} handleMessage={handleMessage} placeholder="Escribe un mensaje"/>
    </>
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
