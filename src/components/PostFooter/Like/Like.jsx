import { useState, memo } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import Icon from "../../PostIcons/Icon";
import useAuthPost from "../../../hooks/useAuthPost";
import styles from "./likes.module.css";

const Like = ({ id, likes }) => {
  const [like, setLike] = useState(true);
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);

  const { data, sendData } = useAuthPost();
  const handleLike = async () => {
    sendData({
      endpoint: `https://groob-backend-production.up.railway.app/like/${id}`,
      postData: { idPostLiked: id },
    });
  };

  const handleDislike = async () => {
    sendData({
      endpoint: `https://groob-backend-production.up.railway.app/dislike/${id}`,
      postData: { idPostLiked: id },
    });
  };

  return (
    <>
      {data === undefined && ((liked === false) === dislike) === false && (
        <Icon>
          <BsHeart
            className={styles.like}
            onClick={() => {
              handleLike();
              setLike(false);
              setLiked(true);
              setDislike(false);
            }}
          />
        </Icon>
      )}
      {data && liked && (
        <Icon>
          <BsHeartFill
            className={styles.liked}
            onClick={() => {
              handleDislike();
              setLike(false);
              setLiked(false);
              setDislike(true);
            }}
          />
        </Icon>
      )}
      {dislike && (
        <Icon>
          <BsHeartFill
            className={styles.dislike}
            onClick={() => {
              handleLike();
              setLike(false);
              setLiked(true);
              setDislike(false);
            }}
          />
        </Icon>
      )}
    </>
  );
};

export default memo(Like);
