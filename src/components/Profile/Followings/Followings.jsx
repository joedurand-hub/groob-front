import styles from "./followings.module.css";

const Followings = ({follows}) => {
  return (
    <div className={styles.data_followings}>
      <span className={styles.data}>
        <strong className={styles.data_number}>
          {follows?.length === 0 ||
          follows === null ||
          follows === undefined
            ? 0
            : follows?.length || (error && 0)}
        </strong>
      </span>
      {follows?.length === 1 ? (
        <span className={styles.data}>Seguido</span>
      ) : (
        <span className={styles.data}>Seguidos</span>
      )}
    </div>
  );
};

export default Followings;
