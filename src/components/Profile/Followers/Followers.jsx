import styles from "./followers.module.css";

const Followers = ({followers}) => {
  
  return (
    <div className={styles.data_followers}>
      <span className={styles.data}>
        <strong className={styles.data_number}>
          {followers?.length === 0
            ? 0
            : followers?.length}
        </strong>
      </span>
      {followers?.length === 1 ? (
        <span className={styles.data}>Seguidor</span>
      ) : (
        <span className={styles.data}>Seguidores</span>
      )}
    </div>
  );
};

export default Followers;
