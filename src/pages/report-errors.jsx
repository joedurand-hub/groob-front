import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import GoBack from "../components/GoBack/Back";
import Link from "next/link";

const Report = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <GoBack path="/feed" text="Reportar errores"/>
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
            Pestaña en construcción
          </h1>
          <p className={theme ? "light_mode" : "dark_mode"}>
            Próximamente disponible.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Report;
