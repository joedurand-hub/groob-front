import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import GoBack from "../components/GoBack/Back";
import Link from "next/link";

const Contact = () => {
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

export default Contact;
