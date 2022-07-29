import styles from "./followings.module.css";

const Followings = ({followings}) => {

  return (
    <div className={styles.data_followings}>
      <span className={styles.data}>
        <strong className={styles.data_number}>
          {followings?.length === 0
            ? 0
            : followings?.length || (error && 0)}
        </strong>
      </span>
      {followings?.length === 1 ? (
        <span className={styles.data}>Seguido</span>
      ) : (
        <span className={styles.data}>Seguidos</span>
      )}
    </div>
  );
};

export default Followings;
