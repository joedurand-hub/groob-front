import { useState, useContext, memo } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import Icon from "../../PostIcons/Icon";
import useAuthPost from "../../../hooks/useAuthPost";
import styles from "./likes.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const Like = ({ id, myId, liked }) => {
  const token = getCookie("authtoken")
  const router = useRouter()
  const {theme} = useContext(ThemeContext)
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
    if (myId === id) {
      return id;
    }
  });
  

  if (myIdInTheLikes || click === true) {
    return (
      <Icon>
        <BsHeartFill
          className={theme ? `${styles.liked} ` : `${styles.liked} `}
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
        <BsHeartFill
          className={theme ? `${styles.like}${styles.light} ` : `${styles.like} ${styles.dark}`}
          onClick={() => {
            if(token === undefined) {
               router.push("/register")
            }
            setClick(true)
            handleLike();
          }}
        />
      </Icon>
    );
  }
};

export default memo(Like);
