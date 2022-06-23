import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Head from "next/head";
import Nav from "../Nav/Nav";
import Anchor from "../Anchor/Anchor";
import Image from "next/image";
import Icon from "../Icon/Icon";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from "./layout.module.css";

const Layout = ({ title, description, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={theme ? "logo.ico" : "logoDarkMode.ico"}
        />
        <meta name="description" content={description} />
      </Head>
      <header>
        <Nav>
            <Anchor path="/Feed/feed">
              <Image
                src={theme ? "/Logo.png" : "/LogoDarkMode.png"}
                alt="Groob logo"
                width={70}
                height={45}
              />
            </Anchor>
          <div className={styles.layout_container_links}>
          <Anchor path="/notifications">
              <Icon>
                <IoNotificationsOutline />
              </Icon>
            </Anchor>
            <Anchor path="/messages">
              <Icon>
                <BiMessageRounded />
              </Icon>
            </Anchor>
            <Anchor path="/menu">
              <Icon>
                <GiHamburgerMenu />
              </Icon>
            </Anchor>
          </div>
        </Nav>
      </header>
      <main
        className={`${
          theme ? styles.layout_light_mode : styles.layout_dark_mode
        }`}
      >
        {children}
      </main>
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
