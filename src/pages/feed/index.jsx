import { useContext, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout/Layout";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { TiHome } from "react-icons/ti";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import { ThemeContext } from "../../contexts/ThemeContext";
import SignUp from "../../components/SignUp/SignUp";
import Button from "../../components/Button/Button";
import { ENDPOINT } from "../../helpers/constants";
import Post from "../../components/Post/Post";

const Feed = ({ posts }) => {
  console.log(posts)
  const [active, setActive] = useState("feed");
  const [postsRecomended, setPostsRecomended] = useState([]);
  const { theme } = useContext(ThemeContext);
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  useEffect(() => {
    try {
      const getPosts = async () => {
        const { data } = await axios.get(`${ENDPOINT}/surfing`);

        setPostsRecomended(data);
      };
      getPosts();
    } catch (error) {
      console.log("error:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <CreatePost
            closeModal={closeModalPost}
            mpAsociated={posts?.mpAccountAsociated}
          />
        </Modal>
      ) : (
        <>
          <div
            style={{
              margin: "-30px 30px 0 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              zIndex: 8,
              position: "fixed",
            }}
          >
            <Button
              onClick={() => setActive("feed")}
              name="Feed"
              variant="tab"
            />
            <Button
              onClick={() => setActive("recomendaciones")}
              name="Recomendados"
              variant="tab"
            />
          </div>
          {postsRecomended.length > 0 && active == "recomendaciones" ? (
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
              <Post
                data={postsRecomended}
                myId={posts.myId}
                myUserExplicitContent={posts.myUserExplicitContent}
              />
            </div>
          ) : (
            active === "feed" && (
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
                {posts.data?.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "50%",
                    }}
                  >
                    <h6 className={theme ? "light_mode" : "dark_mode"}>
                      Aún no hay publicaciones, crea un post, descubre usuarios
                      en la sección de la lupa e invitá a tus amigos!
                    </h6>
                  </div>
                ) : (
                  <Post
                    data={posts.data}
                    myId={posts.myId}
                    myUserExplicitContent={posts.myUserExplicitContent}
                    isVerified={posts.verified}
                  />
                )}
              </div>
            )
          )}
        </>
      )}
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    deleteCookie("authtoken");
    setCookie("authtoken", token, {
      req,
      res,
      maxAge: 1815050,
    });

    const response = await fetch(
      `https://groob-back-production.up.railway.app/posts`,
      {
        method: "GET",
        headers: {
          authtoken: token,
        },
        credentials: "include",
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
