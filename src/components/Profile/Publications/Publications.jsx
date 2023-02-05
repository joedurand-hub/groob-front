import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { ENDPOINT } from "../../../helpers/constants";
import { Toaster, toast } from "react-hot-toast";
import Posts from "../../Post/Post";
import Empty from "../../Empty/Empty";
import useRequest from "../../../hooks/useRequest";
import Loader from "../../Loader/Loader";
import styles from "./publications.module.css";

const Publications = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  const { data, loading, error } = useRequest(
    `${ENDPOINT}/posts/${id}`
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
          <div
            className={
              theme
                ? `${styles.container_publications} ${styles.light}`
                : `${styles.container_publications} ${styles.dark}`
            }
          >
            <Empty
              text={"Aún no hay publicaciones"} />
          </div>
        ) : (
          <Posts data={data} myId={id} />
        )}
      </div>
    </>
  );
};

export default Publications;
