import styles from "./deletePost.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useEffect, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../helpers/constants";
import useDelete from "../../hooks/useDelete";
import Loader from "../Loader/Loader";

const DeletePost = ({ postId, userId, myId }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { data, pending, error, deletePostById } = useDelete();

  useEffect(() => {
    if (data !== undefined) router.reload(window.location.pathname);
  }, [data]);

  const handleDeletePost = () => {
    deletePostById({
      endpoint: `${ENDPOINT}/post/${postId}`,
    });
  };
  return (
    <div>
      <Toaster />
      {userId === myId && (
        <button
          className={
            theme
              ? `${styles.option} ${styles.light}`
              : `${styles.option} ${styles.dark}`
          }
          onClick={handleDeletePost}
        >
          {pending ? <Loader /> : "Eliminar"}
        </button>
      )}
    </div>
  );
};

export default DeletePost;
