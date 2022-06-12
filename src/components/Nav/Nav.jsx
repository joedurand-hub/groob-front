import React, { useContext } from 'react'
import { variantToStyles } from '../../helpers/variant'
import styles from './nav.module.css'
import { ThemeContext } from '../../contexts/ThemeContext'


const NavBar = ({children, variant="nav"}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={`${theme ? styles.nav_light_mode : styles.nav_dark_mode}`}
 >
        {children}
    </nav>
  )
}

export default NavBar