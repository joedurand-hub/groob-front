import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './icon.module.css'

const Icon = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    return (
    <>
      <i className={theme ? `${styles.icon} ${styles.light_mode}`
                          : `${styles.icon} ${styles.dark_mode}`}>
          {children}
      </i>
    </>
  )
}

export default Icon