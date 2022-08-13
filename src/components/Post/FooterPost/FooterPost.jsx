import {useState} from "react"
import styles from "./footerPost.module.css";
import Like from "./Like/Like";
import Comment from "./Comment/Comment";
import Share from "./Share/Share";
import Price from "./Price/Price";
import Icon from "../Icon/Icon";
import Textarea from "../../Textarea/Textarea"

const FooterPost = ({ likes, price, id }) => {
  const [comment, setComment] = useState(false)
  return (
    <>
      {price ? (
        <>
        <div className={styles.container} onClick={() => {
          console.log("click")
          setComment(!comment)}}>
            <Like id={id} />
          <Icon>
            <Comment />
          </Icon>
          <Icon className={styles.user_post}>
            <Share />
          </Icon>
          <h6>${price}</h6>
        </div>
        </>
      ) : (
        <div className={styles.container} onClick={() => {
          console.log("click")
          setComment(!comment)}}>
          <div className={styles.item_footer_post}>
          <Icon>
          <Like id={id} /> 
          </Icon> <h6>{likes}</h6>
          </div>
          <Icon >
            <Comment />
          </Icon>
          <Icon className={styles.user_post}>
            <Share />
          </Icon>
        </div>
      )}

      {comment && (
        <>
        <Textarea placeholder="|"/>
        <button>Enviar</button>
        </>
      )}
    </>
  );
};

export default FooterPost;
