import { useContext } from "react"
import styles from './tab.module.css'
import Icon from '../Icon/Icon'
import { variantToStyles } from "../../helpers/variants"
import { ThemeContext } from "../../contexts/ThemeContext"

const Tab = ({ children, text, variant }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme ? variantToStyles(styles.tab, styles[variant])
      : variantToStyles(styles.icon_dark_mode, styles[variant])
    }>
      <p className={theme ? `${styles.text} light_mode`
        : `${styles.text} dark_mode`}>
        {text}
      </p>
      {children && (
        <Icon variant={theme ? "extra_light" : "extra_dark"}>
          {children}
        </Icon>
      )}
    </div>
  )
}

export default Tab