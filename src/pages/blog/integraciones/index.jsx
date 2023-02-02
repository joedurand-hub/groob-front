import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import GoBack from "../../../components/GoBack/Back";

const Index = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "light_mode" : "dark_mode"}>
      <GoBack path="/blog" text="Blog / Integraciones / Funcionalidades-Desarrolladas" />
      <div style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}>
        <h1 className={theme ? "light_mode" : "dark_mode"}>
          Groob | Blog
        </h1>
        <h2>Funcionalidades desarrolladas</h2>
        <p className={theme ? "light_mode" : "dark_mode"}>
        </p>
      </div>
    </div>
  )
}

export default Index