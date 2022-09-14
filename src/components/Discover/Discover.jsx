import { useContext } from "react";
import styles from "./discover.module.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";

const Discover = ({ data }) => {
    const { theme } = useContext(ThemeContext);
  console.log(data);
  return (
    <div className={styles.container_discover}>
      {data?.map((post, index) => {
        return (
          <>
            <Link href={`/post/${post._id}`} passHref>
              <div key={index} className={styles.discover}>
                {post.images?.map((image, index) => (
                  <>
                    {index === 0 && (
                      <Image
                        key={index}
                        src={image.secure_url}
                        width={500}
                        height={500}
                        alt={`Post de ${post.userName}`}
                      />
                    )}
                  </>
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
