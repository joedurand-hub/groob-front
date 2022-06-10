import Head from "next/head";
import NavBar from "../Nav/Nav";
import { FaUserAlt } from "react-icons/fa";
import { Div } from "./styles.js";
import Anchor from "../Anchor/Anchor";

const Layout = ({ title, description, children }) => {
  return (
        <Div>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <NavBar>
            <Anchor name="Home" path="/" />
            <i>
              <FaUserAlt />
            </i>
            <Anchor name="Profile" path="/profile" />
          </NavBar>
          <main>{children}</main>
          <footer> Bienvenido a Groob </footer>
        </Div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Groob",
  name: "ninguno",
  href: "ninguno",
  description:
    "Groob es una nueva red social multi feed que permite adaptar la interfaz según los gustos de cada usuario.",
};
