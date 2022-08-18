import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Loader from "../../../components/Loader/Loader";
import Link from "next/link"
import Modal from "../Modal/Modal";
import { useModal } from "../../../hooks/useModal"
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../../../helpers/constants";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./conversation.module.css";

const Conversation = ({ chats, currentUserId }) => {
  const [isOpenModalChat, openModalChat, closeModalChat] = useModal(false);
  const [userConnected, setUserConnected] = useState({})
  const [userConversationId, setUserConversationId] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const conversationWithUserId = chats.members.find(
      (id) => id !== currentUserId
      );
      setUserConversationId(conversationWithUserId);
    }, [userConversationId]);
    
    const { data, loading, error } = useRequest(`${ENDPOINT}/profiles-reduced/${userConversationId}`);
    console.log("1", userConnected);
    console.log("2", data);
    
    useEffect(() => { 
      setUserConnected(data)
      }, [data, userConversationId]);


 if(data !== undefined) {
  return (
    <>
    <div className={styles.conversation_container} onClick={() => {
      openModalChat()
    }}>
      {userConnected?.online === true ? (
        <div className={styles.online_dot}></div>
        ) : (
          <div className={styles.offline_dot}></div>
          
          )}
      <Image className={styles.user_online} src={userConnected && userConnected?.profilePicture?.secure_url} width={60} height={60} />
      <span>
        <strong>{userConnected?.userName}</strong>
      </span>
    </div>
    <Modal  isOpen={isOpenModalChat} closeModal={closeModalChat}>

    </Modal>
        </>
  );
 }
  if(loading) {
    return (
      <Loader/>
    )
  }
  if(error || data === undefined) {
    return (
      <>
        <h2>Ops, se ha producido un error</h2>
      </>
    )
  }
};

export default Conversation;
