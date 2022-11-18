import {useContext} from "react"
import styles from './tab.module.css'
import Icon from '../Icon/Icon'
import { ThemeContext } from "../../contexts/ThemeContext"

const Tab = ({children, text}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={styles.tab}>
      <p className={theme ? `${styles.text} light_mode` : `${styles.text} dark_mode`}>{text}</p>
      <Icon variant={theme ? "extra_light" : "extra_dark"}>
        {children}
      </Icon>
    </div>
  )
}

export default Tab