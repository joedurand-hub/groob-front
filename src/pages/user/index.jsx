import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import { IoMenu } from "react-icons/io5";
import { getCookie } from "cookies-next";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useState } from "react";
import Icon from "../../components/Icon/Icon";
import Switch from "../../components/Switch/Switch";
import Publications from "../../components/Profile/Publications/Publications";
import Anchor from "../../components/Anchor/Anchor";

const User = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <Layout
      menuItem={
        <>
          <Icon>
            <IoMenu onClick={() => setOpen(!open)} />
          </Icon>
        </>
      }
    >
      {open ? (
        <Menu>
          <MenuItem>
            <h6>Modo oscuro</h6>
            <Switch />
          </MenuItem>
          <MenuItem>
            <Anchor path="/premium" name="premium"/> <Icon><IoMenu /></Icon>
          </MenuItem>
          <MenuItem>
            <h6>Preguntas Frecuentes</h6> <Icon><IoMenu /></Icon>
          </MenuItem>
          <MenuItem>
            <h6>Contenido explícito</h6>
            <Switch />
          </MenuItem>
          <MenuItem>
            <h6>Contacto</h6> <Icon><IoMenu /></Icon>
          </MenuItem>
        </Menu>
      ) : (
        <>
          <Profile data={data} />
          {/* <Publications /> */}
        </>
      )}
    </Layout>
  );
};

export default User;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/profile`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
      }
    );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
