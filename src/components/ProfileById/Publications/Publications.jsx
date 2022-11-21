import styles from "./publications.module.css";
import Posts from "../../Post/Post";
import { useContext } from "react";
import { ENDPOINT } from "../../../helpers/constants";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useRequest from "../../../hooks/useRequest";
import Loader from "../../Loader/Loader";
import { Toaster, toast } from "react-hot-toast";

const Publications = ({ userId, myId }) => {
  const { theme } = useContext(ThemeContext);
  const { data, loading, error } = useRequest(
    `${ENDPOINT}/posts/${userId}`
  );
  if (loading) {
    return (
      <div
        className={
          theme
            ? `${styles.container_publications} ${styles.light}`
            : `${styles.container_publications} ${styles.dark}`
        }
      >
        <Loader />
      </div>
    );
  }
  if (error) {
    toast.error("Ups! No se han podido cargar las publicaciones.", {
      position: "bottom-center",
      autoClose: "3000",
    });
    return (
    <>
      <Toaster />
    </>
    );
  }
  return (
    <>
      <div
        className={
          theme
            ? `${styles.container_publications} ${styles.light}`
            : `${styles.container_publications} ${styles.dark}`
        }
      >
        {(data && data.length === 0) || data === undefined || data === null ? (
          <h6
            className={
              theme
                ? `${styles.container_publications} ${styles.light}`
                : `${styles.container_publications} ${styles.dark}`
            }
          >
            Aún no hay publicaciones
          </h6>
        ) : (
          <Posts data={data} myId={myId}/>
        )}
      </div>
    </>
  );
};

export default Publications;
