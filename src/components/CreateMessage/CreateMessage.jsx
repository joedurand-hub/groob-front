import InputEmoji from "react-input-emoji"
import SendMessage from '../Conversation/SendMessage/SendMessage'
import styles from "./createMessage.module.css"

const CreateMessage = ({newMessage, handleMessage, handleSendMessage, placeholder}) => {
  return (
    <div className={styles.container_create_message}>
          <InputEmoji className={styles.inputEmoji} value={newMessage} onChange={handleMessage} placeholder={placeholder}/>
          <SendMessage message={newMessage} handleSubmit={handleSendMessage} />   
    </div>
  )
}

export default CreateMessage