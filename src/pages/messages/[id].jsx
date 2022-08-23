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

const Messages = ({ datas }) => {
  const token = getCookie("authToken");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState({})
  const [reciveMessage, setReciveMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState({});
  // const socket = useRef();
  const reciverId = datas.chat.members.find(id => id !== datas.myId)

  useEffect(() => {
    try {
      const getMessages = async () => {
        const { data } = await axios.get(
          `http://localhost:8080/message/${datas?.chat._id}`,
          { headers: { authToken: token } },
          { withCredentials: true }
        );
        setMessages(data);
      };

      if (datas.chat !== null || datas.chat !== undefined) getMessages();
    } catch (error) {
      console.log(error);
    }
  }, [reciveMessage]);

  const handleMessage = (newMessage) => {
    setNewMessage(newMessage);
  };

    const socketMessage = {
      reciverId,
      chatId: datas?.chat._id,
      senderId: messages.myId,
      text: newMessage,
  }
  // console.log("Nuevo mensaje: ", newMessage)
  // console.log("Mensaje enviado: ", submitMessage)
  
  // useEffect(() => {
  //   socket.current = io("http://localhost:8080");
  //   socket.current.emit("newUserAdded", messages.myId)
  //   socket.current.on("getUsers", (allUsers) => {
  //     setOnlineUsers(allUsers)
  //   })
  // }, [onlineUsers]);
  
  console.log("online users:", onlineUsers)
  
  // console.log("Mensaje enviado al socket: ", socketMessage)
    // useEffect(() => {
    //   socket.current = io("http://localhost:8080");
    //     socket.current.emit("newMessage", socketMessage);
    //   }, [submitMessage]);

    // useEffect(() => {
    //   socket.current = io("http://localhost:8080");
    //   socket.current.on("reciveMessage", (newMessage) => {
    //     setReciveMessage(newMessage)
    //   })
    // }, [reciveMessage]);
  // console.log("Recibo desde el socket: ", reciveMessage)


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
        setSubmitMessage(data)
        setNewMessage("");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  
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
        createMessage={
          <InputEmoji value={newMessage} onChange={handleMessage} />
        }
        sendMessage={<SendMessage handleSubmit={handleSendMessage} />}
      >
        <hr />
        {messages.chat?.map((msj) => (
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
