import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { URL } from "../../helpers/constants";
import Link from "next/link";
import Image from "next/image";
import FooterPost from "./FooterPost/FooterPost";
import MoreOptions from "./MoreOptions/MoreOptions"

const Posts = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {data &&
        data.map(({ content, price, createdAt, user, _id }) => (
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
                    src={"https://picsum.photos/id/237/200/300"}
                    width={50}
                    height={50}
                    alt={`Post`}
                  />
                </div>
                <div>
                  <a className={styles.user_name}>Dujo tech</a>
                  <p className={styles.user_crate_date}>{createdAt}</p>
                </div>
              </div>
            </Link>
              <div>
                <MoreOptions/>
              </div>
            </div>
            <div className={styles.post}>

              <p className={styles.post_content}>{content}</p>
              <Image
                className={styles.image}
                src={
                  "https://static.pintzap.com/img/pics/t/600/1643629366_senyor-ajudam-no-vull-morir-aqui.jpg"
                }
                width={482}
                height={482}
                alt="Image"
              />
            </div>
            <>
                <FooterPost price={price}/>
            </>
          </article>
        ))}
    </>
  );
};

export default Posts;
