import React from 'react'
import styles from "./menu.module.css"

const Menu = ({children}) => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navbar_nav}>
          {children}
        </ul>
    </nav>
  )
}

export default Menu