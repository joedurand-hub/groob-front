import styles from "./post.module.css";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import FooterPost from "./FooterPost/FooterPost";
import MoreOptions from "./MoreOptions/MoreOptions";
import timeago from "../../helpers/timeago";
import Comments from "../Comments/Comments";


const Posts = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {data &&
        data.map(
          ({
            content,
            price,
            images,
            createdAt,
            comments,
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
                <div className={styles.user}>
                  <div className={styles.user_container_picture_and_foto}>
                    <Link href={`${URL}/user/${user}`} passHref>
                      <Image
                        className={styles.user_picture}
                        src={profilePicture && profilePicture}
                        width={45}
                        height={45}
                        alt={`Post`}
                      />
                    </Link>
                  </div>

                      <Link
                        href={`${URL}/feed/${_id}`}
                        style={{ textDecoration: "none" }}
                        passHref
                      >
                    <div>
                        <a className={styles.user_name}>{userName}</a>
                        <p className={styles.user_crate_date}>
                          {timeago(createdAt)}
                        </p>
                    </div>
                      </Link>
                </div>
                <div className={styles.moreOptions}>
                  <MoreOptions />
                </div>
              </div>
              <div className={styles.post}>
                <p className={content ? styles.post_content : styles.empty}>
                  {content ? content : null}
                </p>
                {images &&
                  images.map((image) => (
                    <Image
                      key={image._id}
                      layout="responsive"
                      src={image.secure_url}
                      width={500}
                      height={500}
                      alt="Image"
                    />
                  ))}
              </div>
              <>
                <FooterPost price={price && price} id={_id} likes={likes} />
              </>
              <Comments allComments={comments.slice(0, 2)} />
            <Link href={`${URL}/feed/${_id}`} style={{ textDecoration: "none" }} passHref> 
            <>
              {comments.length >= 3 ? (<p className={styles.post_view_more}><strong>Ver más...</strong></p>) : null}
            </>
             </Link> 
            </article>
          )
        )}
    </>
  );
};

export default Posts;
