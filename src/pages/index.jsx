import { useContext, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import NavItem from "../components/NavItem/NavItem";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { TiHome } from "react-icons/ti";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Button from "../components/Button/Button";
import { ENDPOINT } from "../helpers/constants";
import Post from "../components/Post/Post";
import { useRouter } from "next/router";

const Feed = ({ posts }) => {
  const token = getCookie("authtoken")
  const router = useRouter()
  const [active, setActive] = useState("recomendaciones");
  const [postsRecomended, setPostsRecomended] = useState([]);
  if(token) {
    router.push("/feed")
  }

  // useEffect(() => {
  //   try {
  //     const getPosts = async () => {
  //       const { data } = await axios.get(`${ENDPOINT}/surfing`);
  //       console.log(data)
  //       setPostsRecomended(data);
  //     };
  //     getPosts();
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  // console.log(`${ENDPOINT}/surfing`)
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
            <NavItem path="/register">
              <TiHome />
            </NavItem>
            <NavItem path="/register">
              <BiSearchAlt />
            </NavItem>
            <NavItem path="/register">
              <BiChat />
            </NavItem>
            <NavItem path="/register">
              <BiUser />
            </NavItem>
          </Nav>
        </>
      }
    >
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
              onClick={() => router.push("/register")}
              name="Feed"
              variant="tab"
            />
            <Button
              onClick={() => setActive("recomendaciones")}
              name="Recomendados"
              variant="tab"
            />
          </div>
          {posts?.length > 0 && active == "recomendaciones" && (
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
                data={posts}
              />
            </div>
          )} 
    </Layout>
  );
};

export default Feed;


export async function getServerSideProps({ req, res }) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_REACT_ENV === "development" ? `${process.env.API_ENDPOINT_DEVELOPMENT}/surfing` : `${process.env.API_ENDPOINT_PRODUCTION}/surfing`)
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
