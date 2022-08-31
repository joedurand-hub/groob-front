import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import CreatePost from "../components/CreatePost/CreatePost";
import NavItem from "../components/NavItem/NavItem";
import Modal from "../components/Modal/Modal"
import { useModal } from "../hooks/useModal"
import { getCookie } from "cookies-next";
import { BiHome } from "react-icons/bi";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs"; // icon user Secret by Premium (?)
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md"

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
            <BiHome/>
          </NavItem>
          <NavItem path="/search">
            <RiSearchEyeFill />
          </NavItem>
            <BsFillPlusCircleFill onClick={openModalPost} 
            style={{"height": "30px", "width": "30px", "color": "rgb(159, 29, 240)"}}/>
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
      <CreatePost closeModal={closeModalPost}/>
    </Modal>
    hola gente linda <br/><br/><br/>
        </Layout>
  )
}

export default Search