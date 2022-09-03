import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import useAuthPost from '../../../../hooks/useAuthPost';
import styles from "./likes.module.css"

const Dislike = ({id}) => {
  const { data, sendData } = useAuthPost()
  const handleSubmit = async () => {
    sendData({
      endpoint: `http://localhost:8080/like/${id}`,
      postData: {idPostLiked: id},
    });
  };
  
  return (
    <>
      <BsHeartFill className={styles.like} onClick={() => handleSubmit()}/>
    </>
  )
}

export default Dislike