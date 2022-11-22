import {useState, useEffect} from "react";
import styles from "./comments.module.css";

const Comments = ({ allComments }) => {
  const [color,setColor] = useState("")
  useEffect(() => {
    const useGenerateRandomColor = () => {
      const generateColor = () =>{
          setColor(Math.random().toString(16).substr(-6))
      }
      generateColor()
  };
  useGenerateRandomColor()
  }, [])
  return (
    <div className={styles.container}>
      {allComments?.map((comment, index) => (
        <div className={styles.container_comments} key={index}>
          <p  style={{color:`#${color}`, margin: "5px", fontWeight: "700"}}>
            {comment.userName}{": "}
          </p>
          <p className={styles.comment}>{comment.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
