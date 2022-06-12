import React, { useContext } from 'react'
import Head from "next/head";
import Nav from "../Nav/Nav";
import Anchor from "../Anchor/Anchor";
import { FaUserAlt } from "react-icons/fa";
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './layout.module.css'

const Layout = ({ title, description, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
        <div className={`${theme ? styles.layout_light_mode : styles.layout_dark_mode}`}>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <Nav>
            <Anchor name="Home" path="/" />
            <i>
              <FaUserAlt />
            </i>
            <Anchor name="Profile" path="/profile" />
          </Nav>
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
