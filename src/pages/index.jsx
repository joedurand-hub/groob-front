import { useContext } from "react";
import SignUp from "../components/SignUp/SignUp";
import Head from "next/head";
import Switch from "../components/Switch/Switch";
import Footer from "../components/Footer/Footer";
import styles from "../styles/index.module.css";
import { ThemeContext } from "../contexts/ThemeContext";
import Link from "next/link";
import Anchor from "../components/Anchor/Anchor";
const Home = () => {
  const { theme } = useContext(ThemeContext);

  const handleNewPassword = () => {
    //method POST to /reset-password
    console.log("new password");
  };
  return (
    <div
      className={
        theme
          ? `${styles.container} ${styles.light_mode}`
          : `${styles.container} ${styles.dark_mode}`
      }
    >
        <SignUp />
     <br/>
          <Anchor
            name="¿Olvidaste tu contraseña?"
            path="/"
            onClick={handleNewPassword}
          />
    </div>
  );
};

export default Home;
