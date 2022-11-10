import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Publications from "../../components/Profile/Publications/Publications";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { IoMenu } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";

const User = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  
  useEffect(() => {
    window.localStorage.setItem("adultContent", JSON.stringify(false));
  }, []);

  return (
    <>
      <Layout
      username={data?.userName}
      verified={data?.verified}  
      menuItem={
          <>
            <Icon>
              <IoMenu onClick={() => setOpen(!open)} />
            </Icon>
          </>
        }
        nav={
          <>
            <Nav>
              <NavItem path="/feed">
                <BiHome />
              </NavItem>
              <NavItem path="/search">
                <BiSearchAlt />
              </NavItem>
              <OpenModalPost openModalPost={openModalPost} />
              <NavItem path="/messages">
                <BiChat />
              </NavItem>
              <NavItem path="/user">
                <FaUser />
              </NavItem>
            </Nav>
          </>
        }
      >
        <Modal isOpen={isOpenModalPost} closeModal={closeModalPost}>
          <CreatePost closeModal={closeModalPost} />
        </Modal>
        {open ? (
          <Menu valueSwitch={data?.explicitContent} id={data?._id} />
        ) : (
          <>
            <Profile data={data} />
            <Publications id={data?._id} />
          </>
        )}
      </Layout>
    </>
  );
};

export default User;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
      `https://groob-back-production.up.railway.app/profile`,
      {
        headers: {
          authtoken: token,
        },
        credentials: "include",
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
