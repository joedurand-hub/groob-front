import React from 'react'
import styles from "./sendMessage.module.css"

const SendMessage = ({handleSubmit}) => {
  return (
    <div className={styles.send_container}>
      <button className={styles.send} type="submit" onClick={() => {
        console.log("click")
      }}>Enviar</button>
    </div>
  )
}

export default SendMessage