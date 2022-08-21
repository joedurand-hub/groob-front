import React, { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import CreateMessage from "../../components/Conversation/CreateMessage/CreateMessage";
import SendMessage from "../../components/Conversation/SendMessage/SendMessage";
import Message from "../../components/Conversation/Message/Message";
import GoBack from "../../components/GoBack/Back";
import Conversation from "../../components/Conversation/Conversation";
import { TOKEN } from "../../helpers/constants";
import axios from "axios";

const Messages = ({ datas }) => {
  console.log(datas);
  const [messages, setMessages] = useState("");

  useEffect(() => {
    try {
      const getMessages = async () => {
        const { data } = await axios.get(
          `http://localhost:8080/message/${datas?.chat._id}`,
          { headers: { authToken: TOKEN } },
          { withCredentials: true }
        );
        console.log(data);
        setMessages(data);
      };

      if (datas.chat !== null || datas.chat !== undefined) getMessages();
    } catch (error) {
      console.log(error);
    }
  }, [datas]);

  return (
    <div>
      <Conversation
        back={<GoBack path="/messages" />}
        userChat={
          <ChatUser
            profilePicture={datas?.profilePicture}
            userName={datas?.userName}
            width={50}
            height={50}
          />
        }
        
        createMessage={<CreateMessage />}
        sendMessage={<SendMessage />}
      >
         {/* {messages.map(msj => ( */}
            <Message
              profilePicture={datas?.profilePicture}
              text={datas?.chat.messages?.[0]}
            />
         {/* ))}  */}
      </Conversation>
    </div>
  );
};
export default Messages;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const { id } = query;
    const response = await fetch(
      `http://localhost:8080/chat/${id}`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
      }
    );
    const datas = await response.json();
    return {
      props: {
        datas,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
