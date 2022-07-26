import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Switch from "../Switch/Switch";
import Image from "next/image";
import styles from "./profile.module.css";
import Button from "../Button/Button";
import Link from "next/link";
import Card from "../Card/Card";
import { GoVerified } from "react-icons/go";
import { useCard } from "../../hooks/useCard";
import Followings from "../Followings/Followings";
import Followers from "../Followers/Followers";
const Profile = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [isOpenCard, openCard, closeCard] = useCard(false);
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
              src={data?.profile_picture}
              width={400}
              height={400}
              alt="Image"
            />
            <div className={styles.container_username}>
              <h2>{data?.username} </h2>{" "}
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
          <Button name="Premium" variant="secondary" />

          <Button
            name="Billetera $"
            variant="special"
            onClick={openCard}
          />
          <Card isOpen={isOpenCard} closeCard={closeCard}>
            <div>
              {/* Agregar copy to clipboard */}
              <br />
              <h5>Cuentas bancarias y billeteras</h5> <br />
              <strong>Entidad:</strong> Mercado Pago <br />
              <strong>CVU:</strong> 0000003100027978940501 <br />
              <strong>ALIAS:</strong> joe.ars.mp <br />
            </div>
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
