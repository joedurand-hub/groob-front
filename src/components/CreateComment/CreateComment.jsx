import React from 'react'
import styles from "./createComment.module.css"
import InputEmoji from "react-input-emoji"

const CreateComment = (id, comment ) => {
    const sendComment = () => {
        
    }
  return (
    <div>
        <InputEmoji value={comment} onChange={sendComment} placeholder="Hacé un comentario" />
    </div>
  )
}

export default CreateComment