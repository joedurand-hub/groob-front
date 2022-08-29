import { useState, useEffect, useRef } from "react";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { io } from "socket.io-client";
import GoBack from "../../components/GoBack/Back";

const Index = ({ data }) => {
  const [allChats, setAllChats] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const socket = useRef()

  const usersData = data?.usersDataInTheChat?.map((obj) => obj);  
  const chatsId = data?.chatIdAndUserId?.map((obj) => obj.id);

  useEffect(() => {
    setAllChats(data.usersDataInTheChat)
    
    socket.current = io("http://localhost:8080")
    socket.current.emit("newUserAdded", data.myId)
    socket.current.on("getUsers", (allUsers) => {
      setOnlineUsers(allUsers)
    })
    
  }, [allChats])
  return (
    <Chat>
      <div style={{"border-bottom": "1px solid #e6e6e6", "display": "flex", "flex-direction": "row"}}>
        <GoBack path="/feed"/>
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
