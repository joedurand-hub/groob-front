import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import MoreOptions from "../MoreOptions/MoreOptions";
import timeago from "../../helpers/timeago";
import Comments from "../Comments/Comments";
import DeletePost from "../DeletePost/DeletePost";
import Slider from "../Slider/Slider";
import Button from "../Button/Button";
import GoVerified from "../GoVerified/Verified";
import PostFooter from "../PostFooter/PostFooter";
import Share from "../PostFooter/Share/Share";
import CreatePreference from "../CreatePreference/CreatePreference";
import Denounce from "../Denounce/Denounce";
import Buy from "../PostFooter/Buy/Buy";

const Posts = ({ data, myId, publicationsPurchases, myUserExplicitContent }) => {
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
            liked,
            userName,
            profilePicture,
            user,
          }) => {
            return (
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
                            objectFit="cover"
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
                        <a className={styles.user_name} rel="noopener noreferrer">{userName}</a>

                        {userVerified && <GoVerified />}
                        <p className={styles.user_crate_date}>
                          {timeago(createdAt)}
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.moreOptions}>
                    <h6>
                      {price > 0 && (
                        <strong className={styles.price}>
                          ${price}
                        </strong>
                      )}
                    </h6>
                    <MoreOptions
                      postId={_id}
                      userId={user}
                      myId={myId}
                      option1={<DeletePost userId={user} myId={myId} postId={_id} />}
                      option2={<Denounce postId={_id} />}
                    />
                  </div>
                </div>
                <div className={styles.post}>
                  <p className={content ? styles.post_content : styles.empty}>
                    {content ? content : null}
                  </p>
                  <Slider
                    publicationsPurchases={publicationsPurchases}
                    buyers={data}
                    myId={myId}
                    allImages={images}
                    nsfw={explicitContent}
                    price={price}
                    userExplicitContent={myUserExplicitContent}
                  />
                </div>
                <>
                  <PostFooter
                    creatorId={user}
                    userName={userName}
                    postId={_id}
                    descripcion={content}
                    picUrl={profilePicture}
                    explicit={explicitContent}
                    comments={comments.length}
                    price={price && price}
                    id={_id}
                    myId={myId}
                    likes={likes}
                    liked={liked}
                    postToShare={
                      <Share
                        content={content}
                        price={price}
                        fileLink={images}
                        postIdLink={`${URL}/feed/${_id}`}
                        username={userName}
                      />
                    }
                  >
                    <Buy
                      postId={_id}
                      creatorId={user}
                      userName={userName}
                      price={price}
                      descripcion={content}
                      picUrl={profilePicture}
                    />

                  </PostFooter>
                </>

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
          }
        )}
    </>
  );
};

export default Posts;
