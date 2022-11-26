import styles from "./denounce.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useEffect, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../helpers/constants";
import Loader from "../Loader/Loader";
import useAuthPost from "../../hooks/useAuthPost";

const Denounce = ({ postId }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { data, pending, error, sendData } = useAuthPost();

  const handleDenouncePost = () => {
    sendData({
      endpoint: `${ENDPOINT}/post/denounce/${postId}`,
    });
      const reload = setTimeout(
        () => router.reload(window.location.pathname),
        800
      );
      return () => clearTimeout(reload);
  };
  return (
    <>
      <div>
        <button
          className={
            theme
              ? `${styles.option} ${styles.light}`
              : `${styles.option} ${styles.dark}`
          }
          onClick={handleDenouncePost}
        >
          {(pending && <Loader />) || (data === undefined && pending === false)
            ? "Denunciar"
            : data === "post denunciado" &&
              pending === false &&
              "Post denunciado! ✔️"}
        </button>
      </div>
    </>
  );
};

export default Denounce;
