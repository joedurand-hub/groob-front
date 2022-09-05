import { useState, memo } from "react";
import { BsHeartFill } from "react-icons/bs";
import useAuthPost from "../../../../hooks/useAuthPost";
import styles from "./likes.module.css";

const Like = ({ id, likes }) => {
  const [like, setLike] = useState(true);
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);

  const { data, sendData } = useAuthPost();
  const handleLike = async () => {
    sendData({
      endpoint: `http://localhost:8080/like/${id}`,
      postData: { idPostLiked: id },
    });
  };

  const handleDislike = async () => {
    sendData({
      endpoint: `http://localhost:8080/dislike/${id}`,
      postData: { idPostLiked: id },
    });
  };

  return (
    <>
        {data === undefined && liked === false === dislike === false && (
          <>
            <BsHeartFill
              className={styles.like}
              onClick={() => {
              console.log("click LIKE");
                handleLike();
                setLike(false);
                setLiked(true);
                setDislike(false);
              }}
            />
          </>
        )}
      {data && liked && (
        <BsHeartFill
          className={styles.liked}
          onClick={() => {
            console.log("click LIKED");
            handleDislike();
            setLike(false);
            setLiked(false);
            setDislike(true);
          }}
        />
      )}
      {dislike && (
        <BsHeartFill
          className={styles.dislike}
          onClick={() => {
            console.log("click DISLIKE");
            handleLike();
            setLike(false);
            setLiked(true);
            setDislike(false);
          }}
        />
      )}
    </>
  );
};

export default memo(Like);