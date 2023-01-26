import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../../public/Logo.png";
import Head from "next/head";
import MenuNav from "../MenuNav/MenuNav";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import styles from "./layout.module.css";
import GoVerified from "../GoVerified/Verified";

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
          {/* <div className={styles.container_username_and_verify}>
          <li>
            <h3 className={styles.username}><strong>{username && username[0].toUpperCase() + username?.substring(1)}</strong></h3>
          </li>
            {verified && (
              <GoVerified fontSize={22} marginTop={2} marginLeft={5}/>
              )}
              </div> */}
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
  href: "https://groob.com.ar",
  description:
  "Groob es una plataforma con un enfoque en la monetización para creadores de contenido. Se tiene como objetivo ayudar a los pequeños creadores a tener más exposición y generar ingresos a través de la venta de productos digitales como libros electrónicos, podcasts, música y videos. Además hay filtros para detectar y evitar la visualización de contenido explícito.",
};
