import { useRouter } from "next/router";
import { ENDPOINT } from "../../helpers/constants"
import { getCookie } from "cookies-next";
import { useRef, useEffect } from "react"
import { MdOutlineExplore } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { BiChat, BiUser } from "react-icons/bi";
import { useNotifications } from '../../hooks/useNotifications';
import { io } from "socket.io-client";
import Layout from "../../components/Layout/Layout"
import Nav from "../../components/Nav/Nav";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import NavItem from "../../components/NavItem/NavItem";
import NotificationBubble from "../../components/NotificationBubble/NotificationBubble";

const Index = () => {
  const socket = useRef()
  const router = useRouter()
  const token = getCookie("authtoken")
  useEffect(() => {
    if (!token) {
      router.push("/login")
    }
  }, [])

  const notifications = useNotifications();
  const unreadNotifications = notifications.filter((n) => !n.read).length;

  
  useEffect(() => {
    socket.current = io(`${ENDPOINT}`);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return (
      <Layout
        menuItem={
          <>
            <NotificationBubble notifications={unreadNotifications} />
          </>
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

        <div>
          Notificaciones habilitadas
          <div>
            {notifications?.map((notification) => (
              <p key={notification.type}>{notification.type}: {notification.user}</p>
            ))}
          </div>
        </div>
      </Layout>
    )
  }

export default Index