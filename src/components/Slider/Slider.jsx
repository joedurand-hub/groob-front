import { useState, useContext } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

const Slider = ({ allImages }) => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quantity = allImages?.length;
  if (!Array.isArray(allImages) || quantity === 0) return;

  const nextImage = () => {
    console.log("indice actual", currentIndex);
    console.log("total", quantity);
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
          <BsArrowLeft className={styles.icon} />
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
                  layout="responsive"
                  width={500}
                  height={500}
                  alt="Image"
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
          <BsArrowRight className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default Slider;
