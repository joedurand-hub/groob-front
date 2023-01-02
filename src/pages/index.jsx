import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import NavItem from "../components/NavItem/NavItem";
import Post from "../components/Post/Post";
import { TiHome } from "react-icons/ti";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone, MdOutlineExplore } from "react-icons/md";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const Feed = ({ posts }) => {
  const token = getCookie("authtoken");
  const router = useRouter();
  if (token) {
    router.push("/feed");
  }

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
              <MdOutlineExplore />
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
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Post data={posts} />
        </div>
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({ req, res }) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_REACT_ENV === "development"
        ? `${process.env.API_ENDPOINT_DEVELOPMENT}/surfing`
        : `${process.env.API_ENDPOINT_PRODUCTION}/surfing`
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
