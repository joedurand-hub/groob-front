import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useModal } from "../hooks/useModal";
import { ENDPOINT } from "../helpers/constants";
import { BiHome } from "react-icons/bi";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone, MdExplore } from "react-icons/md";
import { getCookie } from "cookies-next";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import CreatePost from "../components/CreatePost/CreatePost";
import Discover from "../components/Discover/Discover";
import NavItem from "../components/NavItem/NavItem";
import Modal from "../components/Modal/Modal";
import OpenModalPost from "../components/CreatePost/OpenModalPost/OpenModalPost";
import SearchUser from "../components/SearchUser/SearchUser";
import Container from "../components/SearchUser/Container/Container";
import User from "../components/SearchUser/User/User";

const Search = ({ posts }) => {
  const { theme } = useContext(ThemeContext);
  const token = getCookie("authtoken");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchQuery = async () => {
      const { data } = await axios.get(
        `${ENDPOINT}/search?input=${query}`,
        { headers: { authtoken: token } },
        { withCredentials: true }
      );
      setResults(data);
    };
    if (query !== "") searchQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value.toLowerCase());
  };

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
              <BiHome />
            </NavItem>
            <NavItem path="/search">
              <MdExplore />
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
      <Modal isOpen={isOpenModalPost} closeModal={closeModalPost}>
        <CreatePost
          closeModal={closeModalPost}
          mpAsociated={posts.mpAccountAsociated}
        />
      </Modal>
      <div className={theme ? `layout light_mode` : `layout dark_mode`}>
        <SearchUser onChange={handleInputChange} />

        {query !== "" && results.length > 0 ? (
          <Container>
            {results.slice(0, 15)?.map((user, index) => (
              <User key={index} data={user} index={index} />
            ))}
          </Container>
        ) : (
          <Discover data={posts} />
        )}
      </div>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
       `${ENDPOINT}/discover`,
      {
        method: "GET",
        headers: {
          authtoken: token,
          "Access-Control-Allow-Credentials": true,
        },
      },
      { withCredentials: true }
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
