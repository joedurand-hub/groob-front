import styles from './blurredImage.module.css'

const BlurredImage = ({children}) => {
  return (
    <div className={styles.blur}>
      {children}
    </div>
  )
}

export default BlurredImage