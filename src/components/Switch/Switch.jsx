import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from "./switch.module.css"


const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const handleClick = () => {
    toggleTheme()
  }

  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" value={theme} onClick={handleClick}/>
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Switch