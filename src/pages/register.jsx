import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SignUp from "../components/SignUp/SignUp";
import styles from "../styles/index.module.css";

const Index = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container} light_mode`
          : `${styles.container} dark_mode`
      }
    >
      <SignUp/>
    </div>
  );
};

export default Index;
