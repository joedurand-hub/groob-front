import React from "react";
import styles from "./back.module.css"
import Link from "next/link"
import Icon from "../Icon/Icon"
import { BiArrowBack } from "react-icons/bi"

const GoBack = ({path}) => {
  return (
    <Link href={path} passHref>
        <BiArrowBack className={styles.back}/>
    </Link>
  );
};

export default GoBack;
