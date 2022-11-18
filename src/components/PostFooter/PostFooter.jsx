import { useState } from "react";
import styles from "./postFooter.module.css";
import Like from "./Like/Like";
import Icon from "../PostIcons/Icon";
import Buy from "./Buy/Buy";
import PostComment from "../PostComment/PostComment";
import { MdInsertComment } from "react-icons/md";

const PostFooter = ({
  postToShare,
  explicit,
  postLikes,
  price,
  id,
  creatorId,
  userName,
  postId,
  descripcion,
  picUrl,
}) => {
  const [comment, setComment] = useState(false);
  const [textComment, setTextComment] = useState("");
  console.log(creatorId)
  console.log(userName)
  console.log(postId)
  console.log(price)
  console.log(descripcion)
  console.log(picUrl)
  const handleComment = (e) => {
    setTextComment(e);
  };

  return (
    <>
      <div className={styles.item_footer_post}>
        <div className={styles.container}>
          <Icon>
            <MdInsertComment
              onClick={() => {
                setComment(!comment);
              }}
            />
          </Icon>
          <Icon className={styles.user_post}>{postToShare}</Icon>
          <Like id={id} likes={postLikes} />
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
          <PostComment sendText={handleComment} text={textComment} id={id} />
        </>
      )}
    </>
  );
};

export default PostFooter;
