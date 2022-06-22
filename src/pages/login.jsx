import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SignIn from "../components/SignIn/SignIn";
import Switch from "../components/Switch/Switch";
import styles from "../styles/index.module.css";
const Login = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div  
      className={ theme ? `${styles.container} ${styles.light_mode}`
          : `${styles.container} ${styles.dark_mode}`}
          >
        <SignIn />
        <Switch />
      </div>
  );
};

export default Login;
