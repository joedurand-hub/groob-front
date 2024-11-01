import { useState, useEffect } from "react";
import styles from "./comments.module.css";

const Comments = ({ allComments }) => {
  const [colorComment, setColorComment] = useState("");

  useEffect(() => {
    setColorComment(Math.random().toString(16).substr(-6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {allComments?.map((comment, index) => (
        <div className={styles.container_comments} key={index}>
          <p
            style={{
              color: `#${colorComment}`,
              margin: "5px",
              fontWeight: "700",
            }}
          >
            {comment.userName}
            {": "}
          </p>
          <p className={styles.comment}>{comment.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
