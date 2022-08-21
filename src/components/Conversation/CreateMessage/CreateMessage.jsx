import InputEmoji from "react-input-emoji"
import styles from "./createMessage.module.css"

const CreateMessage = ({value, onChange}) => {
  return (
    <div className={styles.container}>
        <InputEmoji value={value} onChange={onChange}/>
    </div>
  )
}

export default CreateMessage