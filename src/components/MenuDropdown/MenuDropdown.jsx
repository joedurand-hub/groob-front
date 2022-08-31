import React from 'react'
import { getCookie } from 'cookies-next'
import MenuItem from '../MenuItem/MenuItem'
import Anchor from '../Anchor/Anchor'
import Icon from '../Post/Icon/Icon'
import ThemeSwitch from "../Switch/ThemeSwitch"
import ExplicitSwitch from "../Switch/ExplicitSwitch"
import styles from "./menuDropdown.module.css"


const Menu = ({valueSwitch, id}) => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navbar_nav}>
        <MenuItem>
            <h6>Modo oscuro</h6>
            <ThemeSwitch />
          </MenuItem>
          <MenuItem>
            <Anchor path="/premium" name="premium" />{" "}
            <Icon>
            {">>"}
            </Icon>
          </MenuItem>
          <MenuItem>
            <h6>Preguntas Frecuentes</h6>{" "}
            <Icon>
              {">>"}
            </Icon>
          </MenuItem>
          <MenuItem>
            <h6>Contenido explícito</h6>
            <ExplicitSwitch valueDB={valueSwitch} id={id}/>
          </MenuItem>
          <MenuItem>
            <h6>Contacto</h6>{" "}
            <Icon>
            {">>"}
            </Icon>
          </MenuItem>
        </ul>
    </nav>
  )
}

export default Menu