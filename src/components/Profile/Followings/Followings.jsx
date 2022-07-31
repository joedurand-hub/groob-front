import styles from "./followings.module.css";
import useRequest from "../../../hooks/useRequest";
import { getCookie } from "cookies-next";

const Followings = () => {
  const token = getCookie("authToken");
  const { data, loading, error } = useRequest(
    "http://localhost:8080/followings",
    token
  );

  return (
    <div className={styles.data_followings}>
      <span className={styles.data}>
        <strong className={styles.data_number}>
          {data?.followings.length === 0 ||                     
            data?.followings === null ||
            data?.followings === undefined
            ? 0
            : data?.followings.length || (error && 0)}
        </strong>
      </span>
      {data?.followings?.length === 1 ? (
        <span className={styles.data}>Seguido</span>
      ) : (
        <span className={styles.data}>Seguidos</span>
      )}
    </div>
  );
};

export default Followings;