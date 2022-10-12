import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./card.module.css";

const Card = ({ isOpen, button, children }) => {
  const cardHandleClick = (e) => e.stopPropagation();
  const { theme } = useContext(ThemeContext);

  const lightMode =
    isOpen === true
      ? `${styles.small_card_light} ${styles.small_action}`
      : theme && isOpen
      ? `${styles.small_card_light}`
      : `${styles.small_card_light}`;

  const darkMode =
    isOpen === true
      ? `${styles.small_card_dark} ${styles.small_action}`
      : theme === false && isOpen
      ? `${styles.small_card_dark}`
      : `${styles.small_card_dark}`;

  return (
    <div className={styles.card_container}>
      <div
        className={theme && isOpen === true
          ? `${styles.small_card_light} ${styles.small_action}`
          : theme && isOpen
          ? `${styles.small_card_light}`
          : `${styles.small_card_light}` && theme === false && isOpen === true
          ? `${styles.small_card_dark} ${styles.small_action}`
          : theme === false && isOpen
          ? `${styles.small_card_dark}`
          : `${styles.small_card_dark}`}
        onClick={cardHandleClick}
      >
        {children}
      {button}
      </div>
    </div>
  );
};

export default Card;
