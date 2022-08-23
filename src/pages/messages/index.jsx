import { useState, useEffect, useRef } from "react";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { io } from "socket.io-client";

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
      
      {/* <div styles={{"border-bottom": "1px solid #e6e6e6"}}> */}
      <ChatUser
        myId={data?.myId}
        userName={data?.userName}
        profilePicture={data?.profilePicture}
        online={data?.online}
        width={75}
        height={75}
        />
        {/* </div> */}
      <div>
        <ChatList chatsId={chatsId} users={usersData} />
      </div>

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
