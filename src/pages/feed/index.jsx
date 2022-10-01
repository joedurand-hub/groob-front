import { useContext, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout/Layout";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { setCookie, getCookie } from "cookies-next";
import { TiHome } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import { ThemeContext } from "../../contexts/ThemeContext";

const Post = dynamic(() => import("../../components/Post/Post"), {
  ssr: false,
});

const Feed = ({ posts }) => {
  const { theme } = useContext(ThemeContext);
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  return (
    <Layout
      menuItem={
        <>
          <Icon>
            <MdOutlineNotificationsNone />
          </Icon>
        </>
      }
      nav={
        <>
          <Nav>
            <NavItem path="/feed">
              <TiHome />
            </NavItem>
            <NavItem path="/search">
              <BiSearchAlt />
            </NavItem>
            <OpenModalPost openModalPost={openModalPost} />
            <NavItem path="/messages">
              <BiChat />
            </NavItem>
            <NavItem path="/user">
              <BiUser />
            </NavItem>
          </Nav>
        </>
      }
    >
      {isOpenModalPost ? (
        <Modal isOpen={isOpenModalPost} closeModal={closeModalPost}>
          <CreatePost closeModal={closeModalPost} />
        </Modal>
      ) : posts.data?.length >= 1 ? (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Post data={posts.data} myId={posts.myId} />
        </div>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              marginTop: "50%",
            }}
          >
            <h6 className={theme ? "light_mode" : "dark_mode"}>
              Aún no hay publicaciones, crea un post, descubre usuarios en la sección de la
              lupa e invita a tus amigos!
            </h6>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(`https://groob-backend-production.up.railway.app/posts`, {
        method: "GET",
        headers: {
          authtoken: token,
        },
        credentials: 'include'
      }
    );
    const posts = await response.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
