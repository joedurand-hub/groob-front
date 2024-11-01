import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./card.module.css";
import Button from "../Button/Button";
import { variantToStyles } from "../../helpers/variants";

const Card = ({ isOpen, button, children }) => {
  const cardHandleClick = (e) => e.stopPropagation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.card_container}>
      <div
        className={
          theme && isOpen === true
            ? `${styles.card_light_mode} ${styles.card_action}`
            : theme && isOpen
            ? `${styles.card_light_mode}`
            : `${styles.card_light_mode}` && theme === false && isOpen === true
            ? `${styles.card_dark_mode} ${styles.card_action}`
            : theme === false && isOpen
            ? `${styles.card_dark_mode}`
            : `${styles.card_dark_mode}`
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
