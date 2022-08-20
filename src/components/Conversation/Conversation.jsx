import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Loader from "../../../components/Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../../../helpers/constants";
// import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./conversation.module.css";

const Conversation = ({ username, photo, online }) => {
  const { data } = useRequest(`${ENDPOINT}/chat/${currentUserId}`);
  
  // const [userConnected, setUserConnected] = useState({});
  const [userConversation, setUserConversation] = useState("");
  // const { theme } = useContext(ThemeContext);

  console.log(data)

  return (
    <div>
      hola cara de pija
    </div>
  )

  
};

export default Conversation;
