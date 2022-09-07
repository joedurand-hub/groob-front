import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../../public/Logo.png";
import Head from "next/head";
import MenuNav from "../MenuNav/MenuNav";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import styles from "./layout.module.css";

const Layout = ({ title, description, menuItem, nav, children }) => {
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
                width={70}
                height={45}
              />
            </Anchor>
          </li>
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
