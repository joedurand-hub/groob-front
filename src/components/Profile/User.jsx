import { useState, useEffect, memo } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "../Switch/Switch";
import Image from "next/image";
import styles from './user.module.css'
import Button from "../Button/Button";
import Posts from "../Posts/Posts";

const User = ({ data, loading, error }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let myTheme = window.localStorage.getItem("theme");
    setTheme(!myTheme);
  }, [theme]);


  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: no se pudo traer la info...</p>}
      {!loading && data && (
        <section className={theme ? `${styles.container} light_mode` : `${styles.container} dark_mode`}>
          <header className={styles.user_header}>
            <div className={styles.container_profile_picture}>
              {/* <Image className={styles.user_profile_picture} src={data?.profile_picture} width={200} height={200} alt="Image"/> */}
            </div>
           <div className={styles.container_user_data}>
           <div >
              <h3>{data?.username}</h3>
            </div>

            <div className={styles.user_data}>
             <div className={styles.data_followers}>
             <span className={styles.data}>
                <strong>
                  {(data && data.followers?.length === 0) ||
                  data.followers === null
                    ? 0
                    : data.followers?.length}
                </strong>
              </span >
              <span className={styles.data}>Followers</span>
             </div>

             <div className={styles.data_posts}>
           <span className={styles.data}>
                <strong>
                {(data && data.publications?.length === 0) ||
                data.publications === null
                  ? 0
                  : data.publications?.length}
                </strong>
              </span>
              <span className={styles.data}>
                Publications
              </span>
           </div>

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
      <div>
        <Posts/>
          
        
      </div>
</>
  );
};

export default memo(User);
