import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useEffect } from "react"
import { MdOutlineExplore } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { BiChat, BiUser } from "react-icons/bi";
import Layout from "../../components/Layout/Layout"
import Nav from "../../components/Nav/Nav";
import useRequest from "../../hooks/useRequest";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import NavItem from "../../components/NavItem/NavItem";
import { ENDPOINT } from "../../helpers/constants";
import Notification from "../../components/Notification/Notification";

const Index = () => {
  const { data } = useRequest(`${ENDPOINT}/notification`)
  const router = useRouter()
  const token = getCookie("authtoken")
  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
  }, [])


  return (
    <Layout
      nav={
        <>
          <Nav>
            <NavItem path="/feed">
              <TiHome />
            </NavItem>
            <NavItem path="/search">
              <MdOutlineExplore />
            </NavItem>
            <OpenModalPost />
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

        <Notification notifications={data} />
    </Layout>
  )
}

export default Index