import React, { useState, useEffect, useContext } from "react";
import styles from "./chatbox.module.css"
import Image from "next/image";
import Loader from "../../Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../../../helpers/constants";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ChatBox = ({chat, currentUser}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = chat?.members?.find(
            (id) => id !== currentUserId)
    }, [])

    useEffect(() => {
        setUserConnected(data);
      }, [data, userConversationId]);
    

    const { data, loading, error } = useRequest(
        `${ENDPOINT}/profiles-reduced/${userId}`
      );
    return (
    <div>ChatBox</div>
  )
}

export default ChatBox