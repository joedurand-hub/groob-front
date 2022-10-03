import { useState, useEffect, useContext } from "react";
import styles from "./menuNav.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const MenuNav = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 5) {
        setShow(false);
      } else {
        setShow(true)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);
  return (
    <div className={show ? styles.visible : styles.hidden}>
      <nav
        className={
          theme
            ? `${styles.menu_nav} ${styles.light_mode}`
            : `${styles.menu_nav} ${styles.dark_mode}`
        }
      >
        <ul className={styles.menu_list_ul}>{children}</ul>
      </nav>
    </div>
  );
};

export default MenuNav;
