import {useState} from "react";
import Link from "next/link"
import { getCookie } from "cookies-next";
import Chat from '../../components/Chat/Chat'
import Messages from '../../components/Chat/Messages/Messages'
import io from "socket.io-client"

// const socket = io('http://localhost:8080')

const Index = ({data}) => {
  return (
    <>
      <Chat dato={data}/>
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
