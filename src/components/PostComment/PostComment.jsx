import { useEffect } from "react";
import styles from "./postComment.module.css";
import Button from "../Button/Button";
import useAuthPost from "../../hooks/useAuthPost";
import InputEmoji from "react-input-emoji";
import Loader from "../Loader/Loader"
import {Toaster, toast} from "react-hot-toast"
import { useRouter } from "next/router";

const PostComment = ({ sendText, text, id }) => {
  const router = useRouter();
  const { data, pending, error, sendData } = useAuthPost();
    if(data && data !== undefined) {
      toast.success("¡Comentario creado!", {
        position: "top-center",
        autoClose: "3000",
      })
      router.reload(window.location.pathname);
    }

  const handleSubmit = async () => {
    sendData({
      endpoint: `http://localhost:8080/post/${id}`,
      postData: { value: text },
    });
  };
  return (
    <div className={styles.container}>
      <Toaster/>
      <InputEmoji
        onChange={sendText}
        value={text}
        cleanOnEnter
        maxLength={500}
        placeholder="Dejá tu comentario"
      />
      {pending ? <Loader/> : <Button type="submit" name="Enviar" onClick={handleSubmit} />}
    </div>
  );
};

export default PostComment;
