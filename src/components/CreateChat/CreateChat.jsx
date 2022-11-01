import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../helpers/constants";
import useAuthPost from "../../hooks/useAuthPost";
import Loader from "../Loader/Loader";

const CreateChat = ({ myId, userId }) => {
  const { data, pending, error, sendData } = useAuthPost();
  const router = useRouter();

  useEffect(() => {
    data !== undefined && router.push(`/messages/${userId}`)
  }, [data])

  const handleNewChat = async () => {
    sendData({
      endpoint: `${ENDPOINT}/chat`,
      postData: {
        senderId: myId,
        recivedId: userId,
      },
    });
  };

  return (
    <>
    {pending ? (
      <Loader/>
    ) : (
      <Button
        variant="primary"
        name="Mensaje"
        onClick={handleNewChat}
      />
    )}
    </>
  );
};

export default CreateChat;
