import React, { useState, useEffect, useContext } from "react";
import Image from "next/image"
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../../../helpers/constants";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./conversation.module.css"

const Conversation = ({chats, currentUserId}) => {
    const [userConversationId, setUserConversationId] = useState("")
    const { theme } = useContext(ThemeContext);

    const {data, loading, error} = useRequest(`${ENDPOINT}${GET_PROFILE}/reduced/${userConversationId}`)
    console.log("data", data.profileData)
    console.log("loading", loading)
    console.log("error", error)
    useEffect(() => {
        const conversationWithUserId = chats.members.find((id) => id !== currentUserId)
        setUserConversationId(conversationWithUserId)
    }, [])
  return (
    <div>Conversation</div>
  )
}

export default Conversation