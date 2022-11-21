import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { URL } from "../../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import MoreOptions from "../../MoreOptions/MoreOptions";
import timeago from "../../../helpers/timeago";
import Comments from "../../Comments/Comments";
import DeletePost from "../../DeletePost/DeletePost";
import SliderToBuyers from "../../SliderToBuyers/SliderToBuyers";
import GoVerified from "../../GoVerified/Verified";
import PostFooter from "../../PostFooter/PostFooter";
import Share from "../../PostFooter/Share/Share";
import CreatePreference from "../../CreatePreference/CreatePreference";

const Posts = ({ data, myId, publicationsPurchases, myUserExplicitContent }) => {
  console.log(publicationsPurchases)
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
            userVerified,
            explicitContent,
            likes,
            buyers,
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

                  <Link
                    href={`${URL}/feed/${_id}`}
                    style={{ textDecoration: "none" }}
                    passHref
                  >
                    <div>
                      <a className={styles.user_name}>{userName}</a>{" "}
                      {userVerified && <GoVerified />}
                      <p className={styles.user_crate_date}>
                        {timeago(createdAt)}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className={styles.moreOptions}>
                  <h6 className={styles.price}>
                    <strong>{price > 0 && `AR$ ${price}`}</strong>
                  </h6>
                </div>
              </div>
              <div className={styles.post}>
                <p className={content ? styles.post_content : styles.empty}>
                  {content ? content : null}
                </p>
                <SliderToBuyers
                publicationsPurchases={publicationsPurchases}
                buyers={buyers}
                myId={myId}
                  allImages={images}
                  nsfw={explicitContent}
                  price={price}
                  userExplicitContent={myUserExplicitContent}
                />
              </div>

            </article>
          )
        )}
    </>
  );
};

export default Posts;
