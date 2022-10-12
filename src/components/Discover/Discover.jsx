import { useContext } from "react";
import styles from "./discover.module.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";

const Discover = ({ data }) => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className={
      theme
      ? `${styles.container_discover} light_mode`
      : `${styles.container_discover} dark_mode`
      }>
      {data?.map((post, index) => {
        return (
          <>
            <Link href={`/feed/${post._id}`} passHref>
              <div key={index} className={styles.discover}>
                {post.images?.map((image, index) => (
                  <div key={index}>
                    {index === 0 && (
                      <Image
                        key={index}
                        src={image.secure_url}
                        width={500}
                        height={600}
                        alt={`Post de ${post.userName}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Discover;
