import { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logoFavicon from "../../../public/logo.ico";
import logo from "../../../public/Logo.png";
import Head from "next/head";
import MenuNav from "../MenuNav/MenuNav";
import Nav from "../Nav/Nav";
import NavItem from "../NavItem/NavItem";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import styles from "./layout.module.css";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md"

const Layout = ({ title, description, menuItem, children }) => {
  const { theme } = useContext(ThemeContext);
  const [premium, setPremium] = useState(null)
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href={logoFavicon}
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
        <Nav>
          <NavItem path="/feed">
            <BiHome/>
          </NavItem>
          <NavItem path="/search">
            <BiSearchAlt />
          </NavItem>
          <NavItem path="/streamings">
            <MdOutlineLiveTv />
          </NavItem>
          <NavItem path="/notifications">
            <MdOutlineNotificationsNone />
          </NavItem>
          {premium ? <NavItem path="/user">
          <FaUserSecret />
        </NavItem> :
        <NavItem path="/user">
        <BiUser />
      </NavItem>
          }
        </Nav>
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
