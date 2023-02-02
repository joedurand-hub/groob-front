import React from 'react'
import { useContext } from "react";
import Anchor from "../../components/Anchor/Anchor"
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Link from "next/link";

const Guia = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "light_mode" : "dark_mode"}>
      <GoBack path="/blog" text="Blog / Guía"/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          height: "100%",
        }}
      >
        <h1 style={{textAlign: "center"}} className={theme ? "light_mode" : "dark_mode"}>
        Guía para creadores de contenido
        </h1>
        <p className={theme ? "light_mode" : "dark_mode"}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at pariatur minima inventore alias enim sunt quisquam rem fugiat voluptate repellendus aspernatur, exercitationem nisi error saepe explicabo, obcaecati sint voluptatum? Recusandae expedita debitis minus maiores quod illo, quibusdam nam, fuga soluta quidem eaque error molestias, vero facilis porro labore necessitatibus.
        </p>
      </div>
    </div>
  )
}

export default Guia