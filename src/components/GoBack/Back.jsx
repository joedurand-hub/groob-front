import React from "react";
import styles from "./back.module.css"
import Link from "next/link"
import Icon from "../Icon/Icon"
import { BiArrowBack } from "react-icons/bi"

const GoBack = ({ path, text }) => {
  return (
    <Link href={path} passHref>
      <div className={styles.container_back}>
        <BiArrowBack className={styles.back} />
        {text && (
          <h2 className={styles.back_text}  style={text.length >= 20 ? {fontSize: "20px"} : {fontSize: "24px"}}>{text}</h2>
        )}
      </div>
    </Link>
  );
};

export default GoBack;
