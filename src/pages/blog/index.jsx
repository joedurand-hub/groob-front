import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import GoBack from "../../components/GoBack/Back";
import Link from "next/link";

const Index = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div>
      <GoBack path="/feed" />
      <Link href="/feed">
        <div
          style={{
            marginTop: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className={theme ? "light_mode" : "dark_mode"}>
            Blog
          </h1>
          <h2>Funcionalidades desarrolladas</h2>
          <p className={theme ? "light_mode" : "dark_mode"}>
            
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Index