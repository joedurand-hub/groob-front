import React from 'react'
import { useContext } from "react";
import Anchor from "../../components/Anchor/Anchor"
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Link from "next/link";
import Tab from '../../components/Tab/Tab';

const Index = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "light_mode" : "dark_mode"}>
      <GoBack path="/" text="Blog" />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
        >
        <h1 style={{textAlign: "center"}} className={theme ? "light_mode" : "dark_mode"}>
          Sobre Groob
        </h1>
        <p className={theme ? "light_mode" : "dark_mode"}>
          En estas secciones podrás conocer más sobre Groob a nivel técnico, de negocios y dudas que suele tener la comunidad.
        </p>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "15px",
        }}>
          <h3></h3>
          <br/>
        <Anchor path="blog/integraciones" name="Funcionalidades desarrolladas" variant="large" />
        <Anchor path="blog/integraciones/futuras-implementaciones" name="Futuras implementaciones" variant="large" />
        <Anchor path="blog/preguntas-frecuentes" name="Preguntas Frecuentes" variant="large" />
        <Anchor path="/blog/guia" name="Guía para creadores" variant="large" />
        </div>
      </div>
    </div>
  )
}

export default Index