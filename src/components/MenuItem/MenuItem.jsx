import styles from "./menuItem.module.css"
import Link from "next/link"
import Icon from "../Icon/Icon"

const MenuItem = ({ path, children }) => {
  return (
    <li className={styles.menu_item_list}>
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

export default MenuItem