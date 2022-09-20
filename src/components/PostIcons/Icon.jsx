import { useContext } from 'react'
import { variantToStyles } from '../../helpers/variants'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './icon.module.css'

const Icon = ({ children, variant }) => {
    const { theme } = useContext(ThemeContext)
    return (
    <>
      <i className={
          theme
            ? variantToStyles(styles.icon_light_mode, styles[variant])
            : variantToStyles(styles.icon_dark_mode, styles[variant])
        }>
          {children}
      </i>
    </>
  )
}

export default Icon