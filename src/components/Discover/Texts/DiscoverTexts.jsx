import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./discoverTexts.module.css";

const DiscoverTexts = ({ data }) => {
  const router = useRouter();
  const token = getCookie("authtoken");

  useEffect(() => {
    if (token === undefined) {
      return router.push("/register");
    }
  }, []);

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
      {data?.orderByDate?.map((post, index) => {
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
                        objectFit="cover"
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

export default DiscoverTexts;
