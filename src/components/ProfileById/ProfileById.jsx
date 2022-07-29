import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Image from "next/image";
import Avatar from "../../../public/avatar.png";
import styles from "./profileById.module.css";
import Button from "../Button/Button";
import Follow from "../Follow/Follow";
import Unfollow from "../Unfollow/Unfollow";
import Icon from "../Icon/Icon";
import { BsCashCoin } from "react-icons/bs";
// import { GoVerified } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { useCard } from "../../hooks/useCard";
import Card from "../Card/Card";
import Wallet from "../Wallet/Wallet";
import CryptoWallet from "../WalletCrypto/WalletCrypto";
import Followers from "./Followers/Followers";
import Followings from "./Followings/Followings";

const Profiles = ({ data, token }) => {
  const [isOpenCardFiat, openCardFiat, closeCardFiat] = useCard(false);
  const [isOpenCardCrypto, openCardCrypto, closeCardCrypto] = useCard(false);
  const { theme } = useContext(ThemeContext);
  console.log(data)
  return (
    <>
      <section
        className={
          theme
            ? `${styles.container} light_mode`
            : `${styles.container} dark_mode`
        }
      >
        <header className={styles.user_header}>
          <div className={styles.container_profile_picture}>
            <Image
              className={styles.user_profile_picture}
              src={data ? data?.profilePicture : Avatar}
              width={200}
              height={200}
              alt="Image"
            />
          </div>
          <div className={styles.container_user_data}>
            <div>
              <h3>{data?.username}</h3>
            </div>

            <div className={styles.user_data}>
              <Followers followers={data?.followers} />

              <div className={styles.data_posts}>
                <span className={styles.data}>
                  <strong className={styles.data_number}>
                    {data && data.publications.length > 0
                      ? data.publications.length
                      : 0}
                  </strong>
                </span>
                <span className={styles.data}>Publications</span>
              </div>

              <Followings followings={data?.followings} />
            </div>
          </div>
          <br />
        </header>

        <div className={styles.container_user_description}>
          <span>{data?.description}</span>
        </div>
        <div className={styles.container_buttons}>
          <Follow token={token} id={data?._id} />
          <Unfollow token={token} id={data?._id} />
          <Button name="Mensaje" variant="primary" />
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
        <hr />
      </section>
    </>
  );
};

export default Profiles;
