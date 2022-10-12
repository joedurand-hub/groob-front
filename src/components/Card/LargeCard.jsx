import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./card.module.css";

const Card = ({ isOpen, button, children }) => {
  const cardHandleClick = (e) => e.stopPropagation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.card_container}>
      <div
        className={
          theme && isOpen === true
            ? `${styles.large_card_light} ${styles.large_action}`
            : theme && isOpen
            ? `${styles.large_card_light}`
            : `${styles.large_card_light}` && theme === false && isOpen === true
            ? `${styles.large_card_dark} ${styles.large_action}`
            : theme === false && isOpen
            ? `${styles.large_card_dark}`
            : `${styles.large_card_dark}`
        }
        onClick={cardHandleClick}
      >
        <div className={styles.container}>
          {children}

          {button}
        </div>
      </div>
    </div>
  );
};

export default Card;
