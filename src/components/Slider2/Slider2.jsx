import { useState, useContext } from "react";
import styles from "./slider.module.css";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { buildUrl } from "cloudinary-build-url";
import BlurredImage from "../BlurredImage/BlurredImage";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCookie } from "cookies-next";

const Slider2 = ({ allImages, userExplicitContent, nsfw, price }) => {
  const token = getCookie("authtoken")
  const [currentIndex, setCurrentIndex] = useState(0);

  const quantity = allImages?.length;
  if (!Array.isArray(allImages) || quantity === 0) return;



  if (userExplicitContent === false && nsfw === true 
  || userExplicitContent === true && nsfw === true && price > 0
  || nsfw === true && price > 0
  || userExplicitContent === false && nsfw === true && price > 0
  || !token && nsfw === true && price > 0
  || !token && nsfw === true
    ) {
    return (
      <div className={styles.container_slider}>

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
                {currentIndex === index && (
                  <Image
                    key={index}
                    src={imageBlurred}
                    alt="Image"
                    width={500}
                    height={500}
                    // layout="fill"
                    // objectFit="cover"
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  } 
  else {
    return (
      <div className={styles.container_slider}>

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
               width={500}
                    height={500}
                    alt="Image"
                    // layout="fill"
                    // objectFit="cover"
                  />
                )}
              </div>
            );
          })}
     </div>
    );
  }
};

export default Slider2;
