import styles from "./followings.module.css";
import useRequest from "../../hooks/useRequest";
import { getCookie } from "cookies-next";
import Link from "next/link";
const Followings = () => {
  const token = getCookie("authToken");
  const { data, loading, error } = useRequest(
    "http://localhost:8080/followings",
    token
  );

  return (
    <Link href="/user/followings" passHref>
      <div className={styles.data_followings}>
        <span className={styles.data}>
          <strong className={styles.data_number}>
            {data?.followings.length === 0
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
    </Link>
  );
};

export default Followings;
