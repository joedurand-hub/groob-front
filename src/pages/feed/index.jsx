import { useContext, useEffect, useState } from "react";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useModal } from "../../hooks/useModal";
import { TiHome } from "react-icons/ti";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ENDPOINT } from "../../helpers/constants";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import useRequest from "../../hooks/useRequest";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import axios from "axios";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import Post from "../../components/Post/Post";
import NotificationBubble from "../../components/NotificationBubble/NotificationBubble";
import Tab from "../../components/Tab/Tab";
import Empty from "../../components/Empty/Empty";

const Feed = ({ posts }) => {
  const { data } = useRequest(`${ENDPOINT}/notification/length`)

  const router = useRouter()
  const postIds = new Set();
  const uniquePosts = [];
  posts?.data?.forEach((post) => {
    if (!postIds.has(post._id)) {
      postIds.add(post._id);
      uniquePosts.push(post);
    }
  });
  const postsData = uniquePosts;
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
      console.error("error:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout
      menuItem={
        <div onClick={() => router.push("/notifications")}>
          <Icon>
            <NotificationBubble notifications={data} />
          </Icon>
        </div>
      }
      nav={
        <>
          <Nav>
            <NavItem path="/feed">
              <TiHome />
            </NavItem>
            <NavItem path="/search">
              <MdOutlineExplore />
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
      {/* <Video/> */}
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
              margin: "-30px 0 0 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              zIndex: 8,
              position: "sticky",
              top: 0,
              gap: "15px",
            }}
          >
            <Tab
              onClick={() => setActive("feed")}
              text="Tu feed"
              variant="tab_nav"
            />
            <Tab
              onClick={() => setActive("recomendaciones")}
              text="Tendencias"
              variant="tab_nav"
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
                myId={posts?.myId}
                myUserExplicitContent={posts?.myUserExplicitContent}
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
                {postsData.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "25%",
                    }}
                  >
                    <Empty 
                      text="Este es tu feed, aún no sigues a nadie. Crea un post, o explora usuarios y publicaciones en la aplicación!"
                    />
                  </div>
                ) : (
                  <Post
                    data={postsData}
                    myId={posts?.myId}
                    myUserExplicitContent={posts?.myUserExplicitContent}
                    isVerified={posts?.verified}
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
    if (!token) {
      res.writeHead(302, { Location: '/login' });
      res.end();
    }
    deleteCookie("authtoken");
    setCookie("authtoken", token, { req, res, maxAge: 1815050 });

    const response = await fetch(`${ENDPOINT}/posts`, { method: "GET",
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
    console.error(error);
    return {
      props: {},
    };
  }
}
