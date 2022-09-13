import { useState } from "react";
import styles from "./footerPost.module.css";
import Like from "./Like/Like";
import Comment from "./Comment/Comment";
import Share from "./Share/Share";
import Price from "./Price/Price";
import Icon from "../Icon/Icon";
import Textarea from "../../Textarea/Textarea";
import { useEffect } from "react";
import { MdInsertComment } from "react-icons/md";

const FooterPost = ({ likes, price, id }) => {

  const handleLikes = () => {};

  const [comment, setComment] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      {price ? (
        <div className={styles.item_footer_post}>
          <div className={styles.container}>
            <Like id={id} />
            <Icon>
              <MdInsertComment
                onClick={() => {
                  setComment(!comment);
                }}
              />
            </Icon>
            <Icon className={styles.user_post}>
              <Share />
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
            <Share />
          </Icon>
        </div>
          </div>
      )}

      {comment && (
        <>
          <Textarea placeholder="|" />
          <button>Enviar</button>
        </>
      )}
    </>
  );
};

export default FooterPost;
