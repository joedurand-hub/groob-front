import styles from "./profile.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../Button/Button";
import { IconMoney } from "../Icon/Icon";
import Card from "../Card/Card";
import LargeCard from "../Card/LargeCard";
import Wallet from "../Wallets/WalletFiat/WalletFiat";
import CryptoWallet from "../Wallets/WalletCrypto/WalletCrypto";
import { BsCashCoin } from "react-icons/bs";
import Verified from "../GoVerified/Verified";
import { GiTwoCoins } from "react-icons/gi";
import { useCard } from "../../hooks/useCard";
import Followings from "./Followings/Followings";
import Followers from "./Followers/Followers";
import Tooltip from "../Tooltip/Tooltip";
import UpdatePicture from "../PutProfile/UpdatePicture";
import BuyVerify from "../BuyVerify/BuyVerify";
import useAuthPost from "../../hooks/useAuthPost";
import Anchor from "../Anchor/Anchor";

const Profile = ({ data }) => {
  const { datas, sendData } = useAuthPost();
  const { theme } = useContext(ThemeContext);
  const [isOpenCardFiat, openCardFiat, closeCardFiat] = useCard(false);
  const [isOpenCardCrypto, openCardCrypto, closeCardCrypto] = useCard(false);
  const [isOpenCardVerify, openCardVerify, closeCardVerify] = useCard(false);
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
              width={480}
              height={480}
              priority
              onLoadingComplete={(img) => console.log(img.naturalWidth)}
              objectFit="cover"
              alt={`Foto de perfil de ${data && data.userName}`}
            />

            <UpdatePicture id={data?._id} />

            <div className={styles.container_username}>
              <h1>
                {data?.userName[0].toUpperCase() + data?.userName.substring(1)}{" "}
              </h1>{" "}
              {data && data?.verified ? (
                <Verified  fontSize={22} marginTop={-10} marginLeft={5}/>
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
            {data?.verificationPay === true ? (
              <>
                <Anchor
                  name="Continuar verificación"
                  variant="large"
                  path="/verify-account"
                />
              </>
            ) : (
              <>
                <Button
                  name="Verificar cuenta"
                  variant={"login"}
                  onClick={openCardVerify}
                />
              </>
            )}

            <LargeCard isOpen={isOpenCardVerify} closeCard={closeCardVerify}>
              <BuyVerify dataVerify={data} closeCardVerify={closeCardVerify} />
            </LargeCard>
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
          <Card
            isOpen={isOpenCardCrypto}
            closeCard={closeCardCrypto}
            button={
              <Button variant="login" onClick={closeCardCrypto} name="Close" />
            }
          >
            <CryptoWallet />
          </Card>
          <Card
            isOpen={isOpenCardFiat}
            closeCard={closeCardFiat}
            button={
              <Button variant="login" onClick={closeCardFiat} name="Close" />
            }
          >
            <Wallet userName={data?.userName}/>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Profile;
