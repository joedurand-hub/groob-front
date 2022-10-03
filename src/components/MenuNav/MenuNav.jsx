import { useState, useEffect, useContext } from "react";
import styles from "./menuNav.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const MenuNav = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [scrollDir, setScrollDir] = useState(null);

useEffect(() => {
  const threshold = 0;
  let lastScrollY = window.pageYOffset;
  let upAndDown = false;

  const updateScrollDir = () => {
    const scrollY = window.pageYOffset;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      upAndDown = false;
      return;
    }
    setScrollDir(scrollY > lastScrollY ? "down" : "up");
    lastScrollY = scrollY > 0 ? scrollY : 0;
    upAndDown = false;
  };

  const onScroll = () => {
    if (!upAndDown) {
      window.requestAnimationFrame(updateScrollDir);
      upAndDown = true;
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);

  return (
    <div className={scrollDir === "down" ? styles.hidden : styles.visible}>
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
