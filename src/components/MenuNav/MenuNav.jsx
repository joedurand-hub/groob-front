import React, { useContext } from 'react'
import styles from './menuNav.module.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const MenuNav = ({ children }) => {
    const { theme } = useContext(ThemeContext)
  
    return (
      <nav className={theme ? `${styles.menu_nav} ${styles.light_mode}` 
                            : `${styles.menu_nav} ${styles.dark_mode}`}
   >
        <ul className={styles.menu_list_ul}>
            {children}
          </ul>
      </nav>
    )
  }
  
  export default MenuNav;