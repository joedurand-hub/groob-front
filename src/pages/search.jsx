import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import CreatePost from "../components/CreatePost/CreatePost";
import Discover from "../components/Discover/Discover";
import NavItem from "../components/NavItem/NavItem";
import Modal from "../components/Modal/Modal";
import { useModal } from "../hooks/useModal";
import { BiHome } from "react-icons/bi";
import { RiSearchEyeFill } from "react-icons/ri";
import { BiUser, BiChat } from "react-icons/bi";
import { getCookie } from "cookies-next";
import { MdOutlineNotificationsNone } from "react-icons/md";
import OpenModalPost from "../components/CreatePost/OpenModalPost/OpenModalPost";
import SearchUser from "../components/SearchUser/SearchUser";
import User from "../components/SearchUser/User/User";

const Search = ({ posts }) => {
  const token = getCookie("authToken");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchQuery = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/search?input=${query}`,
        { headers: { authToken: token } },
        { withCredentials: true }
      );
      setResults(data);
    };
    if (query !== "") searchQuery();
  }, [query]);

  console.log(results);

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
              <RiSearchEyeFill />
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
        <CreatePost closeModal={closeModalPost} />
      </Modal>
      <div className="layout">
        <SearchUser onChange={handleInputChange} />
        {query !== "" && results.length > 0 ? (
          <>
            {results.slice(0, 15)?.map((user, index) => (
              <User data={user} index={index} />
            ))}
          </>
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
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/discover`,
      {
        method: "GET",
        headers: {
          authToken: token,
          "Access-Control-Allow-Credentials": true,
        },
      },
      { withCredentials: true }
    );
    const posts = await response.json();
    console.log(posts);
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
