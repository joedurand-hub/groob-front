import { useState } from "react";
import styles from "./postFooter.module.css";
import Like from "./Like/Like";
import Icon from "../PostIcons/Icon";
import { MdInsertComment } from "react-icons/md";
import PostComment from "../PostComment/PostComment";

const PostFooter = ({ postToShare, postLikes, price, id }) => {
  const [comment, setComment] = useState(false);
  const [textComment, setTextComment] = useState("");

  const handleComment = (e) => {
    setTextComment(e);
  };

  return (
    <>
      {price ? (
        <div className={styles.item_footer_post}>
          <div className={styles.container}>
            <Icon>
              <MdInsertComment
                onClick={() => {
                  setComment(!comment);
                }}
              />
            </Icon>
            <Icon className={styles.user_post}>
            {postToShare}
            </Icon>
            <Like id={id} likes={postLikes} />
            <h6>${price}</h6>
          </div>
        </div>
      ) : (
        <div className={styles.item_footer_post}>
          <div className={styles.container}>
            <Icon>
              <MdInsertComment onClick={() => setComment(!comment)} />
            </Icon>
            <Icon className={styles.user_post}>
              {postToShare}
            </Icon>
            <Like id={id} likes={postLikes} />
            <h6>{postLikes === 0 ? null : postLikes}</h6>
          </div>
        </div>
      )}

      {comment && (
        <>
          <PostComment sendText={handleComment} text={textComment} id={id} />
        </>
      )}
    </>
  );
};

export default PostFooter;
