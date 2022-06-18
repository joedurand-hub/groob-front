import { memo } from "react";
import Switch from "../Switch/Switch";
import Image from "next/image";
import styles from './user.module.css'
import Button from "../Button/Button";
const User = ({ data, loading, error }) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: no se pudo traer la info...</p>}
      {!loading && data && (
        <section className={styles.container}>
          <header className={styles.user_header}>
              <Image className={styles.user_profile_picture} src={data?.profile_picture} width={200} height={200} />
           <div className={styles.container_user_data}>
           <div >
              <h3>{data?.username}</h3>
            </div>

            <div className={styles.user_data}>
             <div className={styles.data}>
             <span>
                <strong>
                  {(data && data.followers?.length === 0) ||
                  data.followers === null
                    ? 0
                    : data.followers?.length}
                </strong>
              </span>
              <span>Followers</span>
             </div>

             <div className={styles.data}>
           <span>
                <strong>
                {(data && data.publications?.length === 0) ||
                data.publications === null
                  ? 0
                  : data.publications?.length}
                </strong>
              </span>
              <span>
                Publications
              </span>
           </div>

           <div className={styles.data}>
              <span>
                <strong>
                  {(data && data.followings?.length === 0) ||
                  data.followings === null
                    ? 0
                    : data.followings?.length}
                </strong>
              </span>
              <span>Followings</span>
              </div>
            </div>
           </div>
            <br />
          </header>
 

      <div className={styles.container_user_description}>
        <span>{data?.description}</span>
      </div>
      <div className={styles.container_buttons}>
        <Button name="Editar perfil" variant="primary"/> 
        <Button name="Premium" variant="secondary"/>
        <Button name="Billetera $" variant="special"/>
      </div>
      <hr/>
      <Switch />
      </section>
      )}
</>
  );
};

export default memo(User);
