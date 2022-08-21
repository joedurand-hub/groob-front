import { useState } from "react";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import io from "socket.io-client";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";

// const socket = io('http://localhost:8080')


const Index = ({ data }) => {
  const usersData = data?.usersDataInTheChat?.map((obj) => obj);
  console.log(usersData)

  const chatsId = data?.chatIdAndUserId?.map((obj) => obj.id);

  return (
    <Chat>
      {/* <div styles={{"border-bottom": "1px solid #e6e6e6"}}> */}

      <ChatUser
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
