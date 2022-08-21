import React from "react";
import styles from "./back.module.css"
import Link from "next/link"

const GoBack = ({path}) => {
  return (
    <Link href={path} passHred>
      <p className={styles.back}> {"<"}Volver</p>
    </Link>
  );
};

export default GoBack;
