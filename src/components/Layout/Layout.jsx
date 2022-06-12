import React, { useContext } from 'react'
import Head from "next/head";
import NavBar from "../Nav/Nav";
import { FaUserAlt } from "react-icons/fa";
import { Div } from "./styles.js";
import Anchor from "../Anchor/Anchor";
import navStyles from "../Nav/nav.module.css";
import { ThemeContext } from '../../contexts/ThemeContext'

const Layout = ({ title, description, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
        <div>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <NavBar variant={`${theme ? navStyles.dark_mode : navStyles.light_mode}`}>
            <Anchor name="Home" path="/" />
            <i>
              <FaUserAlt />
            </i>
            <Anchor name="Profile" path="/profile" />
          </NavBar>
          <main>{children}</main>
          <footer></footer>
        </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Groob",
  name: "ninguno",
  href: "ninguno",
  description:
    "Groob es una nueva red social multi feed que permite adaptar la interfaz visual según los gustos de cada usuario.",
};
