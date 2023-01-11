import { useState } from "react";
import { BsChat } from "react-icons/bs"
import styles from "./postFooter.module.css";
import Like from "./Like/Like";
import Icon from "../PostIcons/Icon";
import Buy from "./Buy/Buy";
import PostComment from "../PostComment/PostComment";

const PostFooter = ({
  postToShare,
  explicit,
  likes,
  liked,
  price,
  id,
  myId,
  comments,
  creatorId,
  userName,
  postId,
  descripcion,
  picUrl,
}) => {
  const [comment, setComment] = useState(false);
  const [textComment, setTextComment] = useState("");

  const handleComment = (e) => {
    setTextComment(e);
  };

  return (
    <>
      <div className={styles.item_footer_post}>
        <div className={styles.container}>
          <div style={{display: "flex"}}>

          <Icon>
            <BsChat
              onClick={() => {
                setComment(!comment);
              }}
              />
          </Icon>
            <p><strong>{comments > 0 && comments}</strong></p>
              </div>
          <Icon className={styles.user_post}>{postToShare}</Icon>
          <div style={{display: "flex"}}>

          <Like id={id} likes={likes} liked={liked} myId={myId}/>
          </div>
          {explicit === false && price > 0 && (
            <Icon>
              <Buy
                creatorId={creatorId}
                title={userName}
                postId={postId}
                descripcion={descripcion}
                picUrl={picUrl}
                price={price}
              />
            </Icon>
          )}
        </div>
      </div>

      {comment && (
        <>
          <PostComment sendText={handleComment} text={textComment} id={id}/>
        </>
      )}
    </>
  );
};

export default PostFooter;
