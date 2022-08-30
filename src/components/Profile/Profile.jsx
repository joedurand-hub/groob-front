import styles from "./profile.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../Button/Button";
import { IconMoney } from "../Icon/Icon";
import Card from "../Card/Card";
import Wallet from "../Wallet/Wallet";
import CryptoWallet from "../WalletCrypto/WalletCrypto";
import { BsCashCoin } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { useCard } from "../../hooks/useCard";
import Followings from "./Followings/Followings";
import Followers from "./Followers/Followers";
import Publications from "./Publications/Publications";

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
              src={data && data.profilePicture.secure_url}
              width={400}
              height={350}
              alt={`Foto de perfil de ${data?.userName}`}
            />

            <div className={styles.container_username}>
              <h2>{data?.userName} </h2>{" "}
              {data && data?.premium ? (
                <GoVerified className={styles.verify} />
              ) : null}
            </div>
          </div>
          <div className={styles.container_user_data}>
            <div className={styles.user_data}>
              <Followings follows={data?.followings} />
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
                  <span className={styles.data}>Publicaci...</span>
              </div>
              <Followers follows={data?.followers} />
            </div>
          </div>
          <br />
        </header>

        <div
          className={
            data?.description
              ? styles.container_user_description
              : styles.empty_user_description
          }
        >
          <span>{data?.description}</span>
        </div>
        <div className={styles.container_buttons}>
          <div className={styles.premium}>
            <Button
              name="Activar Premium"
              variant="login"
              onClick={() => {
              }}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              name="Editar perfil"
              variant={theme ? `secondary_light` : `secondary_dark`}
              onClick={() => {
                router.push("/user/update");
              }}
            />
            <IconMoney>
              <BsCashCoin onClick={openCardFiat} />
            </IconMoney>
            <IconMoney Profile>
              <GiTwoCoins onClick={openCardCrypto} />
            </IconMoney>
          </div>
          <Card isOpen={isOpenCardCrypto} closeCard={closeCardCrypto}>
            <CryptoWallet />
          </Card>
          <Card isOpen={isOpenCardFiat} closeCard={closeCardFiat}>
            <Wallet />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Profile;
