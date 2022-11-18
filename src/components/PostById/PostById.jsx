import styles from "./postById.module.css";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import PostFooter from "../PostFooter/PostFooter";
import MoreOptions from "../MoreOptions/MoreOptions";
import timeago from "../../helpers/timeago";
import Comments from "../Comments/Comments";
import Slider from "../Slider/Slider";
import GoVerified from "../GoVerified/Verified";
import Share from "../PostFooter/Share/Share";

const PostById = ({ data }) => {
  const {
    content,
    price,
    images,
    createdAt,
    comments,
    user,
    explicitContent,
    _id,
    userVerified,
    likes,
    profilePicture,
    userName,
  } = data;
  const { theme } = useContext(ThemeContext);
  return (
    <>
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
                <a rel="noopener noreferrer">
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
            <div>
              <a className={styles.user_name}>{userName}</a> {userVerified && <GoVerified/>}
              <p className={styles.user_crate_date}>{timeago(createdAt)}</p>
            </div>
          </div>
          <div className={styles.moreOptions}>
          <h6 className={styles.price}><strong>{price > 0 && `AR$ ${price}`}</strong></h6>
            <MoreOptions />
          </div>
        </div>
        <div className={styles.post}>
          <p className={content ? styles.post_content : styles.empty}>
            {content}
          </p>
          <Slider allImages={images} nsfw={explicitContent} price={price}/>
        </div>
        {content && images.length > 0 ? null : (
          <hr className={styles.hr} />
        )}
        <>
          <PostFooter
          explicit={explicitContent}
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
        { content && comments.length > 0 && images.length > 0 && <hr className={styles.hr} />}
        <Comments allComments={comments} />
      </article>
    </>
  );
};

export default PostById;
