import { useState, memo } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import Icon from "../../PostIcons/Icon";
import useAuthPost from "../../../hooks/useAuthPost";
import styles from "./likes.module.css";

const Like = ({ id, myId, liked, likes }) => {
  const { data, sendData } = useAuthPost();
  const [click, setClick] = useState(false)
  const handleLike = async () => {
    sendData({
      endpoint: `https://groob-back-production.up.railway.app/like/${id}`,
    });
  };

  const handleDislike = async () => {
    sendData({
      endpoint: `https://groob-back-production.up.railway.app/dislike/${id}`,
    });
  };
  
  const myIdInTheLikes = liked?.find((id) => {
    console.log(id)
    if (myId === id) {
      return id;
    }
  });
  

  if (myIdInTheLikes || click === true) {
    return (
      <Icon>
        <BsHeartFill
          className={styles.liked}
          onClick={() => {
            setClick(false)
            handleDislike();
          }}
        />
      </Icon>
    );
  } else if(click === false) {
    return (
      <Icon>
        <BsHeart
          className={styles.like}
          onClick={() => {
            setClick(true)
            handleLike();
          }}
        />
      </Icon>
    );
  }
};

export default memo(Like);
