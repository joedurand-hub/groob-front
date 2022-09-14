import styles from "./publications.module.css";
import Posts from "../../Post/Post";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useRequest from "../../../hooks/useRequest";
import Loader from "../../Loader/Loader";
import { Toaster, toast } from "react-hot-toast";

const Publications = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  const { data, loading, error } = useRequest(
    `http://localhost:8080/posts/${id}`
  );

  if (loading) {
    return (
      <div
        className={
          theme
            ? `${styles.container_publications_light}`
            : `${styles.container_publications_dark}`
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
            ? `${styles.container_publications_light}`
            : `${styles.container_publications_dark}`
        }
      >
        {(data && data.length === 0) || data === undefined || data === null ? (
          <h6
            className={
              theme
                ? `${styles.container_publications_light}`
                : `${styles.container_publications_dark}`
            }
          >
            Aún no hay publicaciones
          </h6>
        ) : (
          <Posts data={data} />
        )}
      </div>
    </>
  );
};

export default Publications;
