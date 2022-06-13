import { useContext } from 'react'
import SignUp from '../components/SignUp/SignUp'
import Switch from '../components/Switch/Switch'
import Footer from '../components/Footer/Footer';
import styles from '../styles/index.module.css'
import { ThemeContext } from '../contexts/ThemeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme? `${styles.container} light_mode` : `${styles.container} dark_mode`}>
      <p>No posees cuenta? Registrate.</p>
      <SignUp/>
      <Switch/>
      <Footer/>  
    </div>
  )
}

export default Home
