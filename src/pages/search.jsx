import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import CreatePost from "../components/CreatePost/CreatePost";
import NavItem from "../components/NavItem/NavItem";
import Modal from "../components/Modal/Modal";
import { useModal } from "../hooks/useModal";
import { BiHome } from "react-icons/bi";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import OpenModalPost from "../components/CreatePost/OpenModalPost/OpenModalPost";

const Search = () => {
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  return (
    <Layout
      menuItem={
        <Icon>
          <MdOutlineNotificationsNone />
        </Icon>
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
      <input type="search" placeholder="Descubre publicaciones"/>
    </Layout>
  );
};

export default Search;
