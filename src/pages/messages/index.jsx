import { useState } from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";
import Chat from "../../components/Chat/Chat";
import io from "socket.io-client";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import ChatList from "../../components/Chat/ChatList/ChatList";

// const socket = io('http://localhost:8080')

// esta ruta recibe el componente con el listado de chats creados

// Al componente debo linkearle el id para reconocer la conversación a abrir

const Index = ({ data }) => {
  const usersData = data.userDataInTheChat.map((obj) => obj);

  const chatsId = data.chatIdAndUserId.map((obj) => obj.id);

  return (
    <>
      <ChatUser
        userName={data?.userName}
        profilePicture={data?.profilePicture}
        online={data?.online}
      />
      <div>
        <ChatList chatsId={chatsId} users={usersData} />
      </div>
    </>
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
