import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Loader from "../../../components/Loader/Loader";
import Link from "next/link";
import useRequest from "../../../hooks/useRequest";
import { ENDPOINT } from "../../../helpers/constants";

const Conversation = ({ chats, currentUserId }) => {
  const [userConnected, setUserConnected] = useState({});
  const [userConversationId, setUserConversationId] = useState("");

  useEffect(() => {
    const conversationWithUserId = chats.members.find(
      (id) => id !== currentUserId
    );
    setUserConversationId(conversationWithUserId);
  }, [userConversationId]);

  const { data } = useRequest(
    `${ENDPOINT}/profiles-reduced/${userConversationId}`
  );

  useEffect(() => {
    setUserConnected(data);
  }, [data, userConversationId]);

  if (data !== undefined) {
    return (
      <>
        <div className={styles.conversation_container}>
          {userConnected?.online === true ? (
            <div className={styles.online_dot}></div>
          ) : (
            <div className={styles.offline_dot}></div>
          )}
          <Link href={`/user/${userConnected}`} passHref>
            <Image className={styles.user_online} src={userConnected && userConnected?.profilePicture?.secure_url} width={60} height={60} />
          </Link>
        </div>
      </>
    );
  }
};

export default Conversation;
