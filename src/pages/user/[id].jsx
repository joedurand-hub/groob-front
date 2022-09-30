import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/ProfileById/ProfileById";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Publications from "../../components/Profile/Publications/Publications";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useModal } from "../../hooks/useModal";
import { BiHome } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";

const ProfileById = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  return (
    <Layout
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
              <OpenModalPost openModalPost={openModalPost}/>
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
          <Profile data={data?.profileData} id={data?.myId} />
          <Publications id={data?.profileData._id}/>
        </>
      )}
    </Layout>
  );
};

export default ProfileById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const {id} = query;
    const response = await fetch(
      `http://localhost:8080/profile/${id}`,
      {
        headers: {
          authtoken: token,
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
    console.log(error);
  }
}
