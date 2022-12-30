import { useState, useContext, memo } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Icon from "../../PostIcons/Icon";
import useAuthPost from "../../../hooks/useAuthPost";
import styles from "./likes.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../../helpers/constants";

const Like = ({ id, myId, liked, likes }) => {
  const [newLike, setNewLike] = useState(likes);
  const token = getCookie("authtoken");
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { sendData } = useAuthPost();

  const [click, setClick] = useState(false);
  const handleLike = async () => {
    sendData({
      endpoint: `${ENDPOINT}/like/${id}`,
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
      <>
        <Icon>
          <FaHeart
            className={theme ? `${styles.liked} ` : `${styles.liked} `}
            onClick={() => {
              setNewLike(newLike - 1);
              setClick(false);
              handleDislike();
            }}
          />
        </Icon>
        <p>
          <strong>{newLike > 0 && newLike}</strong>
        </p>
      </>
    );
  } else if (click === false) {
    return (
      <>
        <Icon>
          <FaRegHeart
            className={
              theme
                ? `${styles.like}${styles.light} `
                : `${styles.like} ${styles.dark}`
            }
            onClick={() => {
              if (token === undefined) {
                router.push("/register");
              }
              setNewLike(newLike + 1);
              setClick(true);
              handleLike();
            }}
          />
        </Icon>
        <p>
          <strong>{newLike > 0 && newLike}</strong>
        </p>
      </>
    );
  }
};

export default memo(Like);
