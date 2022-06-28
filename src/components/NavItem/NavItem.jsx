import { useState } from 'react'
import styles from "./navItem.module.css"
import Link from "next/link"

const NavItem = ({path, icon, children}) => {
  const [open, setOpen] = useState(false)


  return (
    <li className={styles.nav_item}>
        <Link href={path} passHref> 
            <a className={styles.nav_icon_link} onClick={() => setOpen(!open)}>
                {icon}
            </a>
        </Link>
        {open && children}
    </li>
  )
}

export default NavItem

//