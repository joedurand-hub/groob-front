import styles from "./profile.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Switch from "../Switch/Switch";
import Image from "next/image";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Card from "../Card/Card";
import Wallet from "../Wallet/Wallet";
import CryptoWallet from "../WalletCrypto/WalletCrypto";
import { BsCashCoin } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { useCard } from "../../hooks/useCard";
import Followings from "./Followings/Followings";
import Followers from "./Followers/Followers";

const Profile = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [isOpenCardFiat, openCardFiat, closeCardFiat] = useCard(false);
  const [isOpenCardCrypto, openCardCrypto, closeCardCrypto] = useCard(false);
  const router = useRouter();
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
              src={data?.profilePicture}
              width={400}
              height={400}
              alt={`Foto de perfil de ${data?.userName}`}
            />
            <div className={styles.container_username}>
              <h2>{data?.userName} </h2>{" "}
              <GoVerified className={styles.verify} />
            </div>
          </div>
          <div className={styles.container_user_data}>
            <div className={styles.user_data}>
              <Followings />
              <div className={styles.data_posts}>
                <span className={styles.data}>
                  <strong className={styles.data_number}>
                    {(data && data.publications?.length === 0) ||
                    data.publications === null
                      ? 0
                      : data.publications?.length}
                  </strong>
                </span>
                {data && data.publications?.length === 1 ? (
                  <span className={styles.data}>Publicaci...</span>
                ) : (
                  <span className={styles.data}>Publicaci...</span>
                )}
              </div>
              <Followers />
            </div>
          </div>
          <br />
        </header>

        <div className={styles.container_user_description}>
          <span>{data?.description}</span>
        </div>
        <div className={styles.container_buttons}>
          <Button
            name="Editar perfil"
            variant="primary"
            onClick={() => {
              router.push("/user/update");
            }}
          />
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
          <Switch />
        </div>
        <hr />
      </section>
      <div></div>
    </>
  );
};

export default Profile;
