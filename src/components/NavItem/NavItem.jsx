import styles from "./navItem.module.css"
import Link from "next/link"
import Icon from "../Icon/Icon"

const NavItem = ({ path, children }) => {
  return (
    <li className={styles.nav_item_list}>
        <Link href={path} passHref> 
            <a rel="noreferrer noopener">
                <Icon>
                  {children}
                </Icon>
            </a>
        </Link>
    </li>
  )
}

export default NavItem