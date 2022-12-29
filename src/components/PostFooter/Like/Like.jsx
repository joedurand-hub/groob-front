import { useState, useContext, memo } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Icon from "../../PostIcons/Icon";
import useAuthPost from "../../../hooks/useAuthPost";
import styles from "./likes.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../../helpers/constants";

const Like = ({ id, myId, liked }) => {
  const token = getCookie("authtoken")
  const router = useRouter()
  const {theme} = useContext(ThemeContext)
  const { data, sendData } = useAuthPost();
  const [click, setClick] = useState(false)
  const handleLike = async () => {
    sendData({
      endpoint: `${ENDPOINT}}/like/${id}`,
    });
  };

  const handleDislike = async () => {
    sendData({
      endpoint: `${ENDPOINT}/dislike/${id}`,
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
        <FaHeart
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
        <FaRegHeart
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
