import { useState } from "react";
import styles from "./postFooter.module.css";
import Like from "./Like/Like";
import Share from "./Share/Share";
import Icon from "../PostIcons/Icon";
import { MdInsertComment } from "react-icons/md";
import InputComment from "../PostComment/PostComment";

const PostFooter = ({ likes, price, id }) => {
  
  const [comment, setComment] = useState(false);
  const [textComment, setTextComment] = useState("");

  
  const handleComment = (e) => {
    setTextComment(e)
  }

  const texto = {
    title: "Gran día",
    text: "Veamos por qué es un gran día hoy",
    url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  }

  const sharePost = (post) => {
    if(navigator.share) {
      navigator.share(post)
      .then(() => console.log("Ey, funciona!")
      .catch(error => console.log("Error al compartir", error)))
    } else {
      console.log("No soportado")
    }
  }

  return (
    <>
      {price ? (
        <div className={styles.item_footer_post}>
          <div className={styles.container}>
            <Like id={id} likes={likes}/>
            <Icon>
              <MdInsertComment
                onClick={() => {
                  setComment(!comment);
                }}
              />
            </Icon>
            <Icon className={styles.user_post}>
              <Share onClick={() => sharePost(texto)}/>
            </Icon>
            <h6>${price}</h6>
          </div>
        </div>
      ) : (
          <div className={styles.item_footer_post}>
        <div className={styles.container}>
              <Like id={id} likes={likes}/>
            <h6>{likes === 0 ? null : likes}</h6>
          <Icon>
            <MdInsertComment onClick={() => setComment(!comment)} />
          </Icon>
          <Icon className={styles.user_post}>
          <Share onClick={() => sharePost(texto)}/>
          </Icon>
        </div>
          </div>
      )}

      {comment && (
        <>
          <InputComment sendText={handleComment} text={textComment} id={id} />
        </>
      )}
    </>
  );
};

export default PostFooter;
