import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "../Switch/Switch";
import Image from "next/image";
import styles from "./profile.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import { CardContext } from "../../contexts/ActiveCardContext";
import { GoVerified } from "react-icons/go"

const Profile = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { handleCardActivation } = useContext(CardContext)
  const handleClick = () => {
    handleCardActivation()
  }
  return (
    <>
      <section
        className={
          theme
            ? `${styles.container} ${styles.light_mode}`
            : `${styles.container} ${styles.dark_mode}`
        }
      >
        <header className={styles.user_header}>
          <div className={styles.container_profile_picture}>
            <Image
              className={styles.user_profile_picture}
              src={data?.profile_picture}
              width={482}
              height={482}
              alt="Image"
            />
          </div>
          <div className={styles.container_user_data}>
            <div className={styles.container_username}>
              <h2>{data?.username} </h2> <GoVerified/>
            </div>

            <div className={styles.user_data}>
            <Link href="/user/followings" passHref>
              <div className={styles.data_followings}>
                  <span className={styles.data}>
                    <strong>
                      {(data && data.followings?.length === 0) ||
                      data.followings === null
                        ? 0
                        : data.followings?.length}
                    </strong>
                  </span>
                  <span className={styles.data}>Followings</span>
                </div>
              </Link>
              <div className={styles.data_posts}>
                <span className={styles.data}>
                  <strong>
                    {(data && data.publications?.length === 0) ||
                    data.publications === null
                      ? 0
                      : data.publications?.length}
                  </strong>
                </span>
                <span className={styles.data}>Publications</span>
              </div>
              <Link href="/user/followers" passHref>
               <div className={styles.data_followers}>
               <span className={styles.data}>
                    <strong>
                      {(data && data.followers?.length === 0) ||
                      data.followers === null
                        ? 0
                        : data.followers?.length}
                    </strong>
                  </span>
                  <span className={styles.data}>Followers</span>
                </div> 
              </Link>
            </div>
          </div>
          <br />
        </header>

        <div className={styles.container_user_description}>
          <span>{data?.description}</span>
        </div>
        <div className={styles.container_buttons}>
          <Button name="Editar perfil" variant="primary" />
          <Button name="Premium" variant="secondary" />
          <Button onClick={handleClick} name="Billetera $" variant="special" />
        <Switch />
        </div>
        <hr />
      </section>
      <div></div>
    </>
  );
};

export default Profile;
