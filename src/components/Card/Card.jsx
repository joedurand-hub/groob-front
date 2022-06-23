import React, { useState, useContext, memo } from "react";
import { CardContext } from "../../contexts/ActiveCardContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./card.module.css";

const Card = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { activeCard } = useContext(CardContext);


  const handleLightStyles = activeCard
    ? `${styles.card_light_mode} ${styles.card_action} `
    : `${styles.card_light_mode}`
    
    const handleDarkStyles = !activeCard
    ? `${styles.card_dark_mode} ${styles.card_action} `
    : `${styles.card_dark_mode}`

    
  return (
    <div className={styles.card_container}>
      <div
        className={
          theme
            ? `${handleLightStyles} `
            : `${handleDarkStyles}`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Card);
