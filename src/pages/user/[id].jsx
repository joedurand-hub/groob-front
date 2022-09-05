import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Publications from "../../components/Profile/Publications/Publications";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useModal } from "../../hooks/useModal";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router"
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";

const ProfileById = ({ data }) => {
  const router = useRouter()
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  return (
    <Layout
      menuItem={
        <>
          <Icon>
            <MdOutlineNotificationsNone onClick={() => router.push("/notifications")} />
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
      <Profile data={data.profileData} id={data.myId}/>
    </Layout>
  );
};

export default ProfileById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const {id} = query;
    const response = await fetch(
      `http://localhost:8080/profile/${id}`,
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
    console.log(error);
  }
}
