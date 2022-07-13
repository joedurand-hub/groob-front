import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SignIn from "../components/SignIn/SignIn";
import styles from "../styles/index.module.css";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  return (
      <div className={ theme ? `${styles.container} light_mode` : `${styles.container} dark_mode`}>
        <SignIn />
      </div>
  );
};

export default Login;
