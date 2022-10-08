import React from 'react'
import styles from "./comments.module.css"

const Comments = ({allComments}) => {
  return (
    <div className={styles.container_comments}>
        {allComments?.map((comment, index) => (
                <p className={styles.comment} key={index}>{comment}</p>
        ))}
    </div>
  )
}

export default Comments