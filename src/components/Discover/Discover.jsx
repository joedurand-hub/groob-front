import { useState, useEffect, useContext } from "react";
import styles from "./discover.module.css";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";

const Discover = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [explicitContent, setExplicitContent] = useState("");

  useEffect(() => {
    let valueAdultContent = window.localStorage.getItem("adultContent");
    if (valueAdultContent) setExplicitContent(JSON.parse(valueAdultContent));
  }, []);

  return (
    <div
      className={
        theme
          ? `${styles.container_discover} light_mode`
          : `${styles.container_discover} dark_mode`
      }
    >
      {explicitContent === false
        ? data
            .filter((post) => {
              if (post.explicitContent === false && post.price === 0) {
                return post;
              }
            }).map((post, index) => {
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
            })
        : explicitContent === true && data
        .filter((post) => {
          if (post.explicitContent === true && post.price === 0 || post.explicitContent === false && post.price === 0) {
            return post;
          }
        }).map((post, index) => {
            return (
              <>
                <Link href={`/feed/${post._id}`} passHref>
                  <div key={index} className={styles.discover}>
                    {post.images?.map((image, index) => (
                      <div key={index}>
                        {index === 0 && (
                          <div>

                          <Image
                            key={index}
                            src={image.secure_url}
                            width={500}
                            height={600}
                            alt={`Post de ${post.userName}`}
                          />
                          </div>
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
