import React, { useState, useEffect, useRef } from "react";
import { getCookie } from "cookies-next";
import { io } from "socket.io-client";
import { ENDPOINT } from "../../helpers/constants";
import axios from "axios";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import Message from "../../components/Conversation/Message/Message";
import GoBack from "../../components/GoBack/Back";
import Conversation from "../../components/Conversation/Conversation";
import CreateMessage from "../../components/CreateMessage/CreateMessage";

const Messages = ({ datas }) => {
  const token = getCookie("authtoken");
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [reciveMessage, setReciveMessage] = useState(null);
  const [newSocketMessage, setNewSocketMessage] = useState(null);
  const socket = useRef();
  const scroll = useRef();
  const reciverId = datas?.chat.members.find((user) => user !== datas?.myId);

  useEffect(() => {
    try {
      const getMessages = async () => {
        const { data } = await axios.get(
          `${ENDPOINT}/message/${datas?.chat._id}`,
          { headers: { authtoken: token } },
          { withCredentials: true }
        );

        setMessages(data);
        setChat(data.chat);
      };
      if (datas.chat !== null || datas.chat !== undefined) getMessages();
    } catch (error) {
      console.error("error:", error);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reciveMessage, newSocketMessage]);

  const handleMessage = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSendMessage = async () => {
    try {
      const { data } = await axios.post(
        `${ENDPOINT}/message`,
        {
          chatId: datas?.chat._id,
          senderId: messages.myId,
          text: newMessage,
        },
        { headers: { authtoken: token } },
        { withCredentials: true }
      );
      setChat([...chat, data]);
      setNewSocketMessage(data);
      setNewMessage("");
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    socket.current = io(`${ENDPOINT}`);
    if (newSocketMessage !== null) {
      socket.current.emit("newMessage", { newSocketMessage, reciverId });
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSocketMessage]);

  useEffect(() => {
    socket.current = io(`${ENDPOINT}`);
    socket.current.on("receiveMessage", (newMessage) => {
      setReciveMessage(newMessage);
    });
  }, [reciveMessage]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>
      <Conversation
        back={<GoBack path="/messages" />}
        userChat={
          <ChatUser
          verified={datas?.verified}
            profilePicture={datas?.profilePicture}
            userName={datas?.userName}
            width={50}
            height={50}
          />
        }
      >
        <br />
        {chat?.map((msj, index) => (
          <div key={index} ref={scroll}>
            <Message
              key={index}
              senderId={msj.senderId}
              myId={messages.myId}
              profilePicture={datas.profilePicture}
              text={msj.text}
              createdAt={msj.createdAt}
            />
          </div>
        ))}
      </Conversation>
      <CreateMessage
        role={datas?.myRole}
        newMessage={newMessage}
        handleSendMessage={handleSendMessage}
        handleMessage={handleMessage}
        placeholder="Escribe un mensaje"
      />
    </>
  );
};
export default Messages;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authtoken", { req, res });
    if (!token) {
      res.writeHead(302, { Location: '/login' });
      res.end();
    }
    const { id } = query;
    const response = await fetch(`${ENDPOINT}/chat/${id}`,
      {
        headers: {
          authtoken: token,
        },
      },
      {
        credentials: 'include',
      }
    );
    const datas = await response.json();
    return {
      props: {
        datas,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
