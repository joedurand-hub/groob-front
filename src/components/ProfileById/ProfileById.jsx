import { useContext, memo } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Switch from "../Switch/Switch";
import Image from "next/image";
import styles from './profileById.module.css'
import Button from "../Button/Button";
import Follow from "../Follow/Follow";
import Unfollow from "../Unfollow/Unfollow";

const Profiles = ({ data, token }) => {
    const { theme } = useContext(ThemeContext)
    console.log(data)
    return (
      <>
          <section className={theme ? `${styles.container} light_mode` : `${styles.container} dark_mode`}>
            <header className={styles.user_header}>
              <div className={styles.container_profile_picture}>
                {/* <Image className={styles.user_profile_picture} src={data ? data?.profile_picture : null} width={200} height={200} alt="Image"/> */}
              </div>
             <div className={styles.container_user_data}>
             <div >
                <h3>{data?.username}</h3>
              </div>
  
              <div className={styles.user_data}>
               <div className={styles.data_followers}>
               <span className={styles.data}>
               <strong>
                  {data && data.followers.length > 0 ? data.followers.length : 0}
                </strong>
                </span >
                <span className={styles.data}>Followers</span>
               </div>
  
               <div className={styles.data_posts}>
             <span className={styles.data}>
                  <strong>
                  {data && data.publications.length > 0 ? data.publications.length : 0}
                  </strong>
                </span>
                <span className={styles.data}>
                  Publications
                </span>
             </div>
  
             <div className={styles.data_followings}>
                <span className={styles.data}>
                  <strong>
                  {data && data.followings.length > 0 ? data.followings.length : 0}
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
          <Follow token={token} id={data?._id}/>
          <Unfollow token={token} id={data?._id}/>
          <Button name="Mensaje" variant="primary"/> 
        </div>
        <hr/>
        <Switch />
        </section>
        <div>
          
        </div>
  </>
    );
  };

export default Profiles;
