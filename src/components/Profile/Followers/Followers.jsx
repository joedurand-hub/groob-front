import styles from "./followers.module.css";

const Followers = ({follows}) => {
  return (
    <div className={styles.data_followers}>
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
        <span className={styles.data}>Seguidor</span>
      ) : (
        <span className={styles.data}>Seguidores</span>
      )}
    </div>
  );
};

export default Followers;
