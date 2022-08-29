import Layout from "../components/Layout/Layout";
import Icon from "../components/Icon/Icon";
import Nav from "../components/Nav/Nav";
import NavItem from "../components/NavItem/NavItem";
import { getCookie } from "cookies-next";
import { BiHome } from "react-icons/bi";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs"; // icon user Secret by Premium (?)
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md"

const Search = () => {
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
            <BsFillPlusCircleFill onClick={() => {

            }} 
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
    hola gente linda
        </Layout>
  )
}

export default Search