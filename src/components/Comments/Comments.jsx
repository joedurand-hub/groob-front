import React from 'react'
import styles from "./comments.module.css"

const Comments = ({allComments}) => {
  return (
    <div className={styles.container_comments}>
        {allComments?.map((comment, index) => (
                <p key={index} className={styles.comment}>{comment}</p>
        ))}
    </div>
  )
}

export default Comments