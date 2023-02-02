import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './empty.module.css'

const Empty = ({ text }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme ? `${styles.empty} ${styles.light}` : `${styles.empty} ${styles.dark}`}>
      <h4 className={theme ? `${styles.empty_text} light` : `${styles.empty_text} dark`}>
        {text}
      </h4>
    </div>
  )
}

export default Empty