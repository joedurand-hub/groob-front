import React from "react";
import Link from "next/link";
import styles from './anchor.module.css'
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const Anchor = React.forwardRef(
  ({ onClick, path, name, disabled }, ref) => {
    const { theme } = useContext(ThemeContext);

    return (
      <Link href={path} passHref>
        <a className={theme ? `${styles.link} ${styles.link_light_mode}`: `${styles.link} ${styles.link_dark_mode}`}
          rel="noreferrer noopener"
          onClick={onClick}
          ref={ref}>
          {name}
        </a>
      </Link>
    );
  }
);
export default Anchor;