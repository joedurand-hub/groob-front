import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import FooterPost from "./FooterPost/FooterPost";
import MoreOptions from "./MoreOptions/MoreOptions";

const Posts = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  console.log(data)
  return (
    <>
      {data &&
        data.map(
          ({
            content,
            price,
            images,
            createdAt,
            user,
            _id,
            likes,
            profilePicture,
            userName,
          }) => (
            <article
              key={_id}
              className={
                theme
                  ? `${styles.container_post} ${styles.light_mode}`
                  : `${styles.container_post} ${styles.dark_mode}`
              }
            >
              <div className={styles.container_user_post}>
                <Link href={`${URL}/user/${user}`} passHref>
                  <div className={styles.user}>
                    <div className={styles.user_container_picture_and_foto}>
                      <Image
                        className={styles.user_picture}
                        src={profilePicture && profilePicture}
                        width={45}
                        height={45}
                        alt={`Post`}
                      />
                    </div>
                    <div>
                      <a className={styles.user_name}>{userName}</a>
                      {/* <p className={styles.user_crate_date}>{createdAt}</p> */}
                    </div>
                  </div>
                </Link>
                <div className={styles.moreOptions}>
                  <MoreOptions/>
                </div>
              </div>
              <div className={styles.post}>
                <p className={styles.post_content}>{content}</p>
                {images.map(image => (
                  <Image
                    className={styles.image}
                    src={image.secure_url}
                    width={480}
                    height={480}
                    alt="Image"
                  />
                ))}
              </div>
              <>
                <FooterPost price={price && price} id={_id} likes={likes} />
              </>
            </article>
          )
        )}
    </>
  );
};

export default Posts;
