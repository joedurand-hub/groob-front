import styles from "./postComment.module.css";
import useAuthPost from "../../hooks/useAuthPost";
import InputEmoji from "react-input-emoji";
import Loader from "../Loader/Loader";
import { ENDPOINT } from "../../helpers/constants";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Send from "../Send/Send";

const PostComment = ({ sendText, text, id }) => {
  const router = useRouter();
  const { data, pending, error, sendData } = useAuthPost();
  if (data && data !== undefined) {
    router.reload(window.location.pathname);
  }

  if (error && error !== undefined) {
    toast.error("¡Ups, no se pudo realizar.", {
      position: "top-center",
      autoClose: "3000",
    });
    router.push("/register");
  }

  const handleSubmit = async () => {
    sendData({
      endpoint: `${ENDPOINT}/post/${id}`,
      postData: { value: text },
    });
  };
  return (
    <div className={styles.container}>
      <Toaster />
      <InputEmoji
        className="styles.inputComment"
        onChange={sendText}
        value={text}
        cleanOnEnter
        maxLength={500}
        placeholder="Dejá tu comentario"
      />
      {pending ? <Loader /> : <Send value={text} submit={handleSubmit} />}
    </div>
  );
};

export default PostComment;
