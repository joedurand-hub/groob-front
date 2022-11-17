import React from "react";
import useAuthPost from "../../../hooks/useAuthPost";
import { ENDPOINT } from "../../../helpers/constants";
import { BsCashCoin } from "react-icons/bs";

const Buy = ({
  explicitContent,
  creatorId,
  userName,
  postId,
  price,
  descripcion,
  picUrl,
}) => {
  const { data, pending, error, sendData } = useAuthPost();

  const handlePreference = async () => {
    sendData({
      endpoint: `${ENDPOINT}/preferenceProduct`,
      postData: {
        postId: postId,
        creatorId: creatorId,
        title: userName,
        price: price,
        descripcion: descripcion,
        picURL: picUrl,
        quantity: 9999,
      },
    });
  };
  console.log(data)
  console.log(pending)
  console.log(error)
  return (
    <BsCashCoin onClick={handlePreference}/>
  )
};

export default Buy;
