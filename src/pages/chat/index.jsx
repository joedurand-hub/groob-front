import {useState} from "react";
import Link from "next/link"
import Chat from '../../components/Chat/Chat'
import Messages from '../../components/Chat/Messages/Messages'
import io from "socket.io-client"

// const socket = io('http://localhost:8080')

const Index = () => {
  return (
    <>
      <Chat/>
    </>
  )
}

export default Index