import { useContext } from "react";
import { getCookie } from "cookies-next";
import MenuItem from "../MenuItem/MenuItem";
import Anchor from "../Anchor/Anchor";
import Icon from "../Icon/Icon";
import Link from "next/link";
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
          <h6>
            <strong>Modo nocturno</strong>
          </h6>
          <ThemeSwitch />
        </MenuItem>
        <MenuItem>
          <h6>
            <strong>Contenido explícito</strong>
          </h6>
          <ExplicitSwitch valueDB={valueSwitch} id={id} />
        </MenuItem>
        <Link href="/feed" passHref>
          <MenuItem>
            <Anchor
              path="/payments"
              name="Activar Mercado Pago"
              variant="intermediate"
            />
            <div className={styles.row}>{">"}</div>
          </MenuItem>
        </Link>

        <MenuItem>
          <Anchor
            path="/faqs"
            name="Preguntas frecuentes"
            variant="intermediate"
          />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor
            path="/terms"
            name="Términos y Condiciones"
            variant="intermediate"
          />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor
            path="/report-errors"
            name="Reportar errores"
            variant="intermediate"
          />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
        <MenuItem>
          <Anchor
            path="/contact"
            name="Contacto comercial"
            variant="intermediate"
          />
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
