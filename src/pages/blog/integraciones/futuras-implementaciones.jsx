import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import GoBack from "../../../components/GoBack/Back";

const Future = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "light_mode" : "dark_mode"}>
      <GoBack path="/blog/integraciones" text="Blog / Integraciones / Futuras-Implementaciones"/>
      <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}>
        <h1 className={theme ? "light_mode" : "dark_mode"}>
          Blog
        </h1>
        <h2>Implementaciones futuras y en desarrollo.</h2>
        <p className={theme ? "light_mode" : "dark_mode"}>
        </p>
      </div>
    </div>
  )
}

export default Future