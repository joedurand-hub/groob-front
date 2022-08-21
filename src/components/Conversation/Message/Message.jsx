import React from 'react'
import Image from "next/image"
import TextMessage from '../TextMessage/TextMessage'
import styles from "./message.module.css"

const Message = ({profilePicture, text}) => {
  return (
    <div className={styles.container_message}>
      <Image className={styles.profile_image_message} src={profilePicture} width={60} height={60} alt={"Foto de perfil"} />
      <TextMessage text={text}/>
    </div>
  )
}

export default Message