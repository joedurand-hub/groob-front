import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Loader from "../../../components/Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../../../helpers/constants";
// import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./conversation.module.css";

const Conversation = ({ chats, currentUserId }) => {
  console.log(currentUserId)
  const { data } = useRequest(`${ENDPOINT}/chat/${currentUserId}`);
  
  // const [userConnected, setUserConnected] = useState({});
  const [userConversation, setUserConversation] = useState("");
  // const { theme } = useContext(ThemeContext);
  
  // useEffect(() => {
    //   setUserConversationId(usersIdInChat);
  // }, [data, userConversationId]);
  
  //   const usersIdInChat = data?.map(
  //     (obj) => obj.members
  //   ); 
  //   const ids = usersIdInChat.map(id => id[1] )
  // let obj = {}
  // for (let index = 0; index < ids.length; index++) {
  //   const element = ids[index];
  //     obj = {
  //       index: element
  //     }
      // fetch(
      // `${ENDPOINT}/profiles-reduced/${element}`
      //  ).then(response).then(setUserConversation(response.json())).catch(error => console.log(error))
    
  // }
  console.log(data)
  // useEffect(() => {
  //   setUserConnected(data);
  // }, [data, userConversationId]);


  return (
    <div>
      hola cara de pija
    </div>
  )

  // if (data !== undefined) {
  //   return (
  //     <>
  //       <div className={styles.conversation_container}>
  //         {userConnected?.online === true ? (
  //           <div className={styles.online_dot}></div>
  //         ) : (
  //           <div className={styles.offline_dot}></div>
  //         )}
  //         {/* <Image className={styles.user_online} src={userConnected && userConnected?.profilePicture?.secure_url} width={60} height={60} /> */}
  //         <span>
  //           <strong>{userConnected?.userName}</strong>
  //         </span>
  //       </div>
  //     </>
  //   );
  // }

  // if (loading) {
  //   return <Loader />;
  // }
  // if (error || data === undefined) {
  //   return (
  //     <>
  //       <h2>Ops, se ha producido un error</h2>
  //     </>
  //   );
  // }
};

export default Conversation;
