import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Image from "next/image";
import styles from "./profileById.module.css";
import Button from "../Button/Button";
import Follow from "../Follow/Follow";
import Unfollow from "../Unfollow/Unfollow";
import Icon from "../Icon/Icon";
import { BsCashCoin } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { useCard } from "../../hooks/useCard";
import CreateChat from "../CreateChat/CreateChat";
import Card from "../Card/Card";
import Wallet from "../Wallet/Wallet";
import CryptoWallet from "../WalletCrypto/WalletCrypto";
import Followers from "./Followers/Followers";
import Followings from "./Followings/Followings";

const ProfileById = ({ data, id }) => {
  const [follow, setFollow] = useState(false)
  const [isOpenCardFiat, openCardFiat, closeCardFiat] = useCard(false);
  const [isOpenCardCrypto, openCardCrypto, closeCardCrypto] = useCard(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    
    }, [follow])
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
              src={data && data?.profilePicture.secure_url}
              width={225}
              height={225}
              alt="Image"
            />
          </div>
          <div className={styles.container_user_data}>
            <div className={styles.container_username}>
              <h3>{data?.userName[0].toUpperCase() + data?.userName.substring(1)}</h3>
              {data && data?.verified ? (
                <GoVerified className={styles.verify} />
              ) : null}
            </div>

            <div className={styles.user_data}>
              <Followers followers={data?.followers} />

              <div className={styles.data_posts}>
                <span className={styles.data}>
                  <strong className={styles.data_number}>
                    {(data && data?.publications.length === 0) ||
                    data?.publications === null ||
                    data?.publications === undefined
                      ? 0
                      : data.publications?.length}
                  </strong>
                </span>
                { data?.publications.length === 1 && <span className={styles.data}>Publicación</span>}
                { data?.publications.length === 0 || data?.publications.length > 1 && <span className={styles.data}>Publicaciones</span>}
              </div>

              <Followings followings={data?.followings} />
            </div>
          </div>
        </header>

        <div className={styles.container_user_description}>
          <span>{data?.description}</span>
        </div>
        <div className={styles.container_buttons}>
          {data?.followers?.includes(id) ? (<Unfollow id={data?._id} onClick={() => setFollow(!follow)}/>) : (<Follow id={data?._id} onClick={() => setFollow(!follow)}/>) }
          <CreateChat myId={id} userId={data?._id}/>
          <Icon>
            <BsCashCoin onClick={openCardFiat} />
          </Icon>
          <Icon>
            <GiTwoCoins onClick={openCardCrypto} />
          </Icon>
          <Card isOpen={isOpenCardFiat} closeCard={closeCardFiat}>
            <Wallet />
          </Card>
          <Card isOpen={isOpenCardCrypto} closeCard={closeCardCrypto}>
            <CryptoWallet />
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProfileById;
