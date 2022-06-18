import React, { useContext } from 'react'
import Head from "next/head";
import Nav from "../Nav/Nav";
import Anchor from "../Anchor/Anchor";
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './layout.module.css'
import Image from "next/image"

const Layout = ({ title, description, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
        <div className={`${theme ? styles.layout_light_mode : styles.layout_dark_mode}`}>
          <Head>
            <title>{title}</title>
            <link rel="icon" href={theme? `${"logo.ico"}` : `${"logoDarkMode.ico"}`} />
            <meta name="description" content={description} />
          </Head>
          <header>

          <Nav>
            {/* <Image src="/Logo.png" alt="logo" width={200} height={200}/> */}
            <Anchor name="Home" path="/Feed/feed" />
            <Anchor name="Mensajes" path="/messages" />
          </Nav>
          </header>
          <main>{children}</main>
          <Nav>
            <Anchor name="Home" path="/" />
            <Anchor name="Profile" path="/Profile/profile" />
          </Nav>
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
