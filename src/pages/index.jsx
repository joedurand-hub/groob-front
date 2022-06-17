import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SignUp from "../components/SignUp/SignUp";
import Head from "next/head";
import Switch from "../components/Switch/Switch";
import Footer from "../components/Footer/Footer";
import styles from "../styles/index.module.css";
import Link from "next/link";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme ? `${styles.container} ${styles.light_mode}`
                       : `${styles.container} ${styles.dark_mode}`}>
        <SignUp />
    </div>
  );
};

export default Home;
