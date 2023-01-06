import { useState, useContext } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { buildUrl } from "cloudinary-build-url";
import BlurredImage from "../BlurredImage/BlurredImage";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCookie } from "cookies-next";

const Slider = ({ allImages, userExplicitContent, nsfw, price }) => {

  const token = getCookie("authtoken");
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quantity = allImages?.length;
  if (!Array.isArray(allImages) || quantity === 0) return;

  const nextImage = () => {
    setCurrentIndex(currentIndex === quantity - 1 ? 0 : currentIndex + 1);
  };

  const previusImage = () => {
    setCurrentIndex(currentIndex === 0 ? -1 : currentIndex - 1);
  };

  if (
    (userExplicitContent === false && nsfw === true) ||
    (userExplicitContent === true && nsfw === true && price > 0) ||
    (nsfw === true && price > 0) ||
    (userExplicitContent === false && nsfw === true && price > 0) ||
    (!token && nsfw === true && price > 0) ||
    (!token && nsfw === true)
  ) {
    return (
      <div
        className={
          theme
            ? `${styles.container_slider} light_mode`
            : `${styles.container_slider} dark_mode`
        }
      >
        {currentIndex === 0 ? null : (
          <button
            onClick={previusImage}
            className={`${styles.btn_slide} ${styles.prev}`}
          >
            <IoIosArrowBack className={styles.icon} />
          </button>
        )}

        {allImages &&
          allImages.map((image, index) => {
            let imageBlurred = buildUrl(`${image.public_id}`, {
              cloud: {
                cloudName: "groob",
              },
              transformations: {
                effect: "blur:2000",
                quality: 1,
              },
            });
            return (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? `${styles.slide} ${styles.active}`
                    : `${styles.slide}`
                }
              >
                <BlurredImage></BlurredImage>
                {currentIndex === index && (
                  <Image
                    key={index}
                    src={imageBlurred}
                    alt="Image"
                    width={500}
                    height={500}
                    objectFit="cover"
                  />
                )}
              </div>
            );
          })}

        {currentIndex === quantity - 1 ? null : (
          <button
            onClick={nextImage}
            className={`${styles.btn_slide} ${styles.next}`}
          >
            <IoIosArrowForward className={styles.icon} />
          </button>
        )}
      </div>
    )
  }  else {
    return (
      <div
        className={
          theme
            ? `${styles.container_slider} light_mode`
            : `${styles.container_slider} dark_mode`
        }
      >
        {currentIndex === 0 ? null : (
          <button
            onClick={previusImage}
            className={`${styles.btn_slide} ${styles.prev}`}
          >
            <IoIosArrowBack className={styles.icon} />
          </button>
        )}

        {allImages &&
          allImages.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? `${styles.slide} ${styles.active}`
                    : `${styles.slide}`
                }
              >
                {currentIndex === index && (
                  <MyImage
                  key={index}
                  src={image.secure_url}
                  alt="Image"
                  width={500}
                  height={500}
                  quality={85}
                  objectFit="cover"
                  />
                )}
              </div>
            );
          })}

        {currentIndex === quantity - 1 ? null : (
          <button
            onClick={nextImage}
            className={`${styles.btn_slide} ${styles.next}`}
          >
            <IoIosArrowForward className={styles.icon} />
          </button>
        )}
      </div>
    );
  }
};

export default Slider;
