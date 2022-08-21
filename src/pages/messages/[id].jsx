import React from "react";
import { getCookie } from "cookies-next";
import ChatUser from "../../components/Chat/ChatUser/ChatUser";
import CreateMessage from "../../components/Conversation/CreateMessage/CreateMessage";
import SendMessage from "../../components/Conversation/SendMessage/SendMessage";
import Message from "../../components/Conversation/Message/Message";
import GoBack from "../../components/GoBack/Back";
import Conversation from "../../components/Conversation/Conversation";

const Messages = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Conversation
        back={
            <GoBack path="/messages"/>
        }
        userChat={
          <ChatUser
            profilePicture={data?.profilePicture}
            userName={data?.userName}
            width={50}
            height={50}
          />
        }
        message={
          <Message
            profilePicture={data?.profilePicture}
            text={data?.chat.messages?.[0]}
          />
        }
        createMessage={<CreateMessage />}
        sendMessage={<SendMessage />}
      ></Conversation>
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
