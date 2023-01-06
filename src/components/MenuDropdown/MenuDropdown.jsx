import { useContext } from "react";
import MenuItem from "../MenuItem/MenuItem";
import Anchor from "../Anchor/Anchor";
import Icon from "../Icon/Icon";
import Link from "next/link";
import { ENDPOINT } from "../../helpers/constants";
import { deleteCookie } from "cookies-next";
import useAuthPost from "../../hooks/useAuthPost";
import ThemeSwitch from "../Switch/ThemeSwitch";
import ExplicitSwitch from "../Switch/ExplicitSwitch";
import styles from "./menuDropdown.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Menu = ({ valueSwitch, id }) => {
  const { theme } = useContext(ThemeContext);
  const { data, sendData } = useAuthPost();

  const handleLogout = async () => {
    sendData({
      endpoint: `${ENDPOINT}/logout`,
      id: id,
    });
    deleteCookie("authtoken");
  };

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
              path={`https://auth.mercadopago.com/authorization?client_id=6604225923180824&response_type=code&platform_id=mp&state=${id}&redirect_uri=https://groob-back.onrender.com/mp-connect`}
              name="Asociar Mercado Pago"
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
          <Anchor
            path="/"
            name="Cerrar sesión"
            onClick={handleLogout}
            variant="logout"
          />
          <div className={styles.row}>{">"}</div>
        </MenuItem>
      </ul>
    </nav>
  );
};

export default Menu;
