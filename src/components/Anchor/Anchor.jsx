/* eslint-disable react/display-name */
import React from "react";
import Link from "next/link";
import styles from "./anchor.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { variantToStyles } from "../../helpers/variants";

const Anchor = React.forwardRef(
  ({ onClick, path, name, disabled, variant, children }, ref) => {
    const { theme } = useContext(ThemeContext);
    return (
      <Link href={path} passHref>
        <a
          className={
            theme
              ? variantToStyles(styles.link_light_mode, styles[variant])
              : variantToStyles(styles.link_dark_mode, styles[variant])
          }
          rel="noreferrer noopener"
          onClick={onClick}
          disabled={disabled}
          ref={ref}
        >
          {name} {children}
        </a>
      </Link>
    );
  }
);
export default Anchor;

// This Link component is to be used OUTSIDE the navigation bar.
