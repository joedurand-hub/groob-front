import { useState, useContext } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { buildUrl } from "cloudinary-build-url";
import BlurredImage from "../BlurredImage/BlurredImage";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCookie } from "cookies-next";

const Slider = ({ allImages }) => {

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
                  <Image
                    key={index}
                    src={image.secure_url}
                    alt="Image"
                    width={500}
                    height={500}
                    quality={85}
                    // layout="fill"
                    // objectFit="cover"
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


export default Slider;
