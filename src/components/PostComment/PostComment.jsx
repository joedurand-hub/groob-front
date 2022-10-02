import styles from "./postComment.module.css";
import useAuthPost from "../../hooks/useAuthPost";
import InputEmoji from "react-input-emoji";
import Loader from "../Loader/Loader"
import {Toaster, toast} from "react-hot-toast"
import { useRouter } from "next/router";
import {IoSend} from "react-icons/io5"
import Icon from "../Icon/Icon"

const PostComment = ({ sendText, text, id }) => {
  const router = useRouter();
  const { data, pending, error, sendData } = useAuthPost();
    if(data && data !== undefined) {
      router.reload(window.location.pathname);
    }

    if(error && error !== undefined) {
      toast.error("¡Ups, algo ha salido mal! No fuiste tu, no te preocupes.", {
        position: "top-center",
        autoClose: "3000",
      })
      router.reload(window.location.pathname);
    }

  const handleSubmit = async () => {
    sendData({
      endpoint: `https://groob-backend-production.up.railway.app/post/${id}`,
      postData: { value: text },
    });
  };
  return (
    <div className={styles.container}>
      <Toaster/>
      <InputEmoji
      className="styles.inputComment"
        onChange={sendText}
        value={text}
        cleanOnEnter
        maxLength={500}
        placeholder="Dejá tu comentario"
      />
      {pending ? <Loader/> : <Icon>

      <IoSend onClick={handleSubmit} className={text.length > 0 ? styles.send : styles.disabled}/>
                </Icon>}
    </div>
  );
};

export default PostComment;
