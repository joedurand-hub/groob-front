import React, { useContext } from 'react'
import styles from './nav.module.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const Nav = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={theme ? `${styles.nav} ${styles.light_mode}` 
                          : `${styles.nav} ${styles.dark_mode}`}
 >
        {children}
    </nav>
  )
}

export default Nav;