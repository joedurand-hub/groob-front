import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../../public/Logo.png";
import Head from "next/head";
import MenuNav from "../MenuNav/MenuNav";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import styles from "./layout.module.css";
import { GoVerified } from "react-icons/go";

const Layout = ({ title, description, username, verified, menuItem, nav, children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.ico"
        />
        <meta name="description" content={description} />
      </Head>
      <header>
        <MenuNav>
          <li>
            <Anchor path="/feed">
              <Image
                src={logo}
                alt="Groob logo"
                width={50}
                height={32}
              />
            </Anchor>
          </li>
          <div className={styles.container_username_and_verify}>
          <li>
            <h3 className={styles.username}><strong>{username && username[0].toUpperCase() + username?.substring(1)}</strong></h3>
          </li>
            {verified ? (
              <GoVerified className={styles.verify} />
              ) : null}
              </div>
          <div className={styles.layout_container_links}>
            {menuItem}
            </div>
        </MenuNav>
      </header>
      <main
        className={`${
          theme ? styles.layout_light_mode : styles.layout_dark_mode
        }`}
      >
        {children}
      </main>
      <footer>
        {nav}
      </footer>
    </>
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
