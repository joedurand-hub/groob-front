import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { io } from "socket.io-client";
import GoBack from "../../components/GoBack/Back";

const Index = ({ data }) => {
  const [allChats, setAllChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  const usersData = data?.usersDataInTheChat?.map((obj) => obj);
  const chatsId = data?.chatIdAndUserId?.map((obj) => obj.id);

  useEffect(() => {
    setAllChats(data.usersDataInTheChat);

    socket.current = io("http://localhost:8080");
    socket.current.emit("newUserAdded", data.myId);
    socket.current.on("getUsers", (allUsers) => {
      setOnlineUsers(allUsers);
    });
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allChats]);

  const { theme } = useContext(ThemeContext);
  return (
    <Chat>
      <div
        style={
          theme
            ? {
                borderBottom: "1px solid rgb(120 117 122)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }
            : {
                borderBottom: "1px solid rgb(84 84 84)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }
        }
      >
        <GoBack path="/feed" />
        <ChatUser
          myId={data?.myId}
          userName={data?.userName}
          profilePicture={data?.profilePicture}
          width={75}
          height={75}
        />
      </div>
      <ChatList chatsId={chatsId} users={usersData} />
    </Chat>
  );
};

export default Index;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/chats`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
      }
    );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
