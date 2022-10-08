import { useContext } from "react";
import { getCookie } from "cookies-next";
import MenuItem from "../MenuItem/MenuItem";
import Anchor from "../Anchor/Anchor";
import Icon from "../Icon/Icon";
import ThemeSwitch from "../Switch/ThemeSwitch";
import ExplicitSwitch from "../Switch/ExplicitSwitch";
import styles from "./menuDropdown.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Menu = ({ valueSwitch, id }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav
      className={
        theme ? `${styles.navbar} light_mode` : `${styles.navbar} dark_mode`
      }
    >
      <ul className={styles.navbar_nav}>
        <MenuItem>
        <h5><strong>Modo nocturno</strong></h5>
          <ThemeSwitch />
        </MenuItem>
        <MenuItem>
          <h5><strong>Contenido explícito</strong></h5>
          <ExplicitSwitch valueDB={valueSwitch} id={id} />
        </MenuItem>
        <MenuItem>
          <Anchor path="/payments" name="Activar Mercado Pago" variant="large" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor path="/faqs" name="Preguntas frecuentes" variant="large" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor path="/terms" name="Términos y Condiciones" variant="large" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor path="/report-errors" name="Reportar errores" variant="large" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor path="/contact" name="Contacto comercial" variant="large" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor path="/login" name="Cerrar sesión" variant="logout" />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
      </ul>
    </nav>
  );
};

export default Menu;
