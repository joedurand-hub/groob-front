import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { io } from "socket.io-client";
import GoBack from "../../components/GoBack/Back";
import { inactivityTime } from "../../helpers/inactivityTime";

const Index = ({ data }) => {
  console.log(data)
  const res = inactivityTime(data?.myId)
  console.log(res)
  const [allChats, setAllChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  const usersData = data?.usersDataInTheChat?.map((obj) => obj);
  const chatsId = data?.chatIdAndUserId?.map((obj) => obj.id);

  useEffect(() => {
    setAllChats(data.usersDataInTheChat);

    socket.current = io("https://groob-backend-production.up.railway.app");
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
          online={data?.online}
          profilePicture={data?.profilePicture}
          width={75}
          height={75}
        />
      </div>
      <ChatList chatsId={chatsId} users={usersData}  />
    </Chat>
  );
};

export default Index;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
      `https://groob-backend-production.up.railway.app/chats`,
      {
        headers: {
          authtoken: token,
        },
      },
      {
        credentials: 'include',
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
