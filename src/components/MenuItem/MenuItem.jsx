import styles from "./menuItem.module.css"
import Icon from "../Icon/Icon"

const MenuItem = ({ children, name }) => {
  return (
    <li className={styles.menu_item_list}>
                  {children}
    </li>
  )
}

export default MenuItem