import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import NavItem from "../components/NavItem/NavItem";
import { BiSearchAlt } from "react-icons/bi";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import OpenModalPost from "../components/CreatePost/OpenModalPost/OpenModalPost";
import Button from "../components/Button/Button";
import Post from "../components/Post/Post";
import { useRouter } from "next/router";

const Index = ({ posts }) => {
  const router = useRouter()
  const [active, setActive] = useState("recomendaciones");

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
            <OpenModalPost onClick={() => router.push("/register")} />
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
          {postsRecomended.length > 0 && active == "recomendaciones" && (
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
        </>
    </Layout>
  );
};

export default Index

export async function getServerSideProps({ req, res }) {
  try {

    const response = await fetch(
      `https://groob-back-production.up.railway.app/surfing`);
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
