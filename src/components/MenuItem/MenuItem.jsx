import styles from "./menuItem.module.css"
import Icon from "../Icon/Icon"

const MenuItem = ({ children }) => {
  return (
    <li className={styles.menu_item_list}>
      <div className={styles.item}>
                  {children}
      </div>
    </li>
  )
}

export default MenuItem