import React, { useContext, memo } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from "./switch.module.css"


const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const handleClick = () => {
    toggleTheme()
  }

  return (
    <div className={styles.container_switch}>
      <label className={styles.switch}>
        <input type="checkbox" value={theme} onClick={handleClick}/>
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default memo(Switch);