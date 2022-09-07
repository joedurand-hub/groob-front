import { useContext, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout/Layout";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { getCookie } from "cookies-next";
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
  
  const postsByDate = useMemo(() => {
    const postsInFeed = posts.data
      return postsInFeed?.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        return -1;
      });
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



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
        <div style={{ marginTop: "20px", display: "flex", flexDirection:"column", "justifyContent": "center", "alignItems": "center", width: "100%" }}>
          <Post data={postsByDate} myId={posts.myId} />
        </div>
      ) : 
         (
          <>
            <br />
            <br />
            <br />
            <h6 className={theme ? "light_mode" : "dark_mode"}>
              Aún no hay publicaciones, descubre usuarios en la sección de la
              lupa o invita a tus amigos!
            </h6>
          </>
        
      )}
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/posts`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
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
