import styles from "./followers.module.css";
import useRequest from "../../../hooks/useRequest";
import { getCookie } from "cookies-next";

const Followers = () => {
  const token = getCookie("authToken");
  const { data, loading, error } = useRequest(
    "http://localhost:8080/followers",
    token
  );
  return (
    <div className={styles.data_followers}>
      <span className={styles.data}>
        <strong className={styles.data_number}>
        {data?.followers.length === 0 ||                     
            data?.followers === null ||
            data?.followers === undefined
            ? 0
            : data?.followers.length || (error && 0)}
        </strong>
      </span>
      {data?.followers.length === 1 ? (
        <span className={styles.data}>Seguidor</span>
      ) : (
        <span className={styles.data}>Seguidores</span>
      )}
    </div>
  );
};

export default Followers;
