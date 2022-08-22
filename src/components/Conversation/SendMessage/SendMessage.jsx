import React, {memo} from 'react'
import styles from "./sendMessage.module.css"

const SendMessage = ({handleSubmit}) => {
  return (
    <div className={styles.send_container}>
      <button className={styles.send} type="submit" onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default memo(SendMessage);