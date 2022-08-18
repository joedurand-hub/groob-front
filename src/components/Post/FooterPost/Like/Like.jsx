import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import useAuthPost from '../../../../hooks/useAuthPost';

const Like = ({id}) => {
  const { data, sendData } = useAuthPost()
  const handleSubmit = async () => {
    sendData({
      endpoint: `http://localhost:8080/like/${id}`,
      postData: {idPostLiked: id},
    });
  };
  
  return (
    <>
      <BsHeartFill onClick={() => handleSubmit()}/>
    </>
  )
}

export default Like