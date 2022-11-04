import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import MoreOptions from "../MoreOptions/MoreOptions";
import timeago from "../../helpers/timeago";
import Comments from "../Comments/Comments";
import Slider from "../Slider/Slider";
import PostFooter from "../PostFooter/PostFooter";
import Share from "../PostFooter/Share/Share";

const Posts = ({ data, myId, myUserExplicitContent }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {data &&
        data.map(
          ({
            _id,
            content,
            price,
            images,
            createdAt,
            comments,
            explicitContent,
            likes,
            userName,
            profilePicture,
            user,
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
                      <a>
                        <Image
                          className={styles.user_picture}
                          src={profilePicture && profilePicture}
                          width={45}
                          height={45}
                          alt={`Post`}
                        />
                      </a>
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
                  <MoreOptions postId={_id} userId={user} myId={myId} />
                </div>
              </div>
              <div className={styles.post}>
                <p className={content ? styles.post_content : styles.empty}>
                  {content ? content : null}
                </p>

                <Slider
                  allImages={images}
                  nsfw={explicitContent}
                  price={price}
                  userExplicitContent={myUserExplicitContent}
                />
              </div>
              {/* {content && images.length > 0 ? null : (
                <div>
                  <hr className={styles.hr} />
                </div>
              )} */}
              <>
                <PostFooter
                  price={price && price}
                  id={_id}
                  likes={likes}
                  postToShare={
                    <Share
                      content={content}
                      price={price}
                      fileLink={images}
                      postIdLink={`${URL}/feed/${_id}`}
                      username={userName}
                    />
                  }
                />
              </>
              {/* {content && comments.length > 0 && images.length > 0 ? (
                <hr className={styles.hr} />
              ) : (
                !content &&
                comments.length === 0 &&
                images.length > 0 && null
              )} */}
              <Comments allComments={comments.slice(0, 3)} />
              <>
                {comments.length > 3 ? (
                  <Link
                    href={`${URL}/feed/${_id}`}
                    style={{ textDecoration: "none" }}
                    passHref
                  >
                    <p className={styles.post_view_more}>
                      <strong>Ver más...</strong>
                    </p>
                  </Link>
                ) : null}
              </>
            </article>
          )
        )}
    </>
  );
};

export default Posts;
