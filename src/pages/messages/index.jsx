import {useState} from "react";
import Link from "next/link"
import { getCookie } from "cookies-next";
import Chat from '../../components/Chat/Chat'
import Messages from '../../components/Conversation/Messages/Messages'
import io from "socket.io-client"
import Conversation from "../../components/Chat/Conversation/Conversation";

// const socket = io('http://localhost:8080')

// esta ruta recibe el componente con el listado de chats creados

// Al componente debo linkearle el id para reconocer la conversación a abrir

const Index = ({data}) => {
  
  return (
    <>
      <Chat user={data}>

              <div>
                <Conversation currentUserId={data?._id}/> 
                {/* recibe el id para buscar todas las conversaciones */}
              </div>

      </Chat>
    </>
  )
}

export default Index

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/profile-reduced`,
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
