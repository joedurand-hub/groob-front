import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Publications from "../../components/Profile/Publications/Publications";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { inactivityTime } from "../../helpers/inactivityTime";
import CreatePost from "../../components/CreatePost/CreatePost";
import { IoMenu, IoBagCheck } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsFileEarmarkPost } from "react-icons/bs";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";
import Purchases from "../../components/Purchases/Purchases";
import Products from "../../components/Products/Products";
import Tab from "../../components/Tab/Tab";

const User = ({ data }) => {
  const res = inactivityTime(data?.myId)
  console.log(res)
  console.log(data)
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("publications");
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);

  useEffect(() => {
    window.localStorage.setItem("adultContent", JSON.stringify(false));
  }, []);
  return (
    <>
      <Layout
        username={data?.userName}
        verified={data?.verified}
        menuItem={
          <>
            <Icon>
              <IoMenu onClick={() => setOpen(!open)} />
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
                <BiSearchAlt />
              </NavItem>
              <OpenModalPost openModalPost={openModalPost} />
              <NavItem path="/messages">
                <BiChat />
              </NavItem>
              <NavItem path="/user">
                <FaUser />
              </NavItem>
            </Nav>
          </>
        }
      >
        <Modal isOpen={isOpenModalPost} closeModal={closeModalPost}>
          <CreatePost
            closeModal={closeModalPost}
            mpAsociated={data?.mpAccountAsociated}
          />
        </Modal>
        {open ? (
          <Menu valueSwitch={data?.explicitContent} id={data?._id} />
        ) : (
          <>
            <Profile data={data} />
            <div style={{ display: "flex", marginTop: "10px", gap: "20px" }}>
              {data?.publications.length > 0 && (
              <Tab text=" Posts ">
                <BsFileEarmarkPost onClick={() => setTab("publications")} />
              </Tab>
              )}
              {data?.mpAccountAsociated && (
                <Tab text="Exclusivos">
                  <RiVipDiamondFill onClick={() => setTab("products")} />
                </Tab>
              )}
              {data?.purchases.length > 0 && (
                <Tab text="Compras">
                  <IoBagCheck onClick={() => setTab("purchases")} />
                </Tab>
              )}
            </div>
            {tab === "publications" && <Publications id={data?._id} />}
            {tab === "products" && (
              <Products
                myId={data?._id}
                myUserExplicitContent={data?.explicitContent}
              />
            )}
            {tab === "purchases" && (
              <Purchases
                myId={data?._id}
                publicationsPurchases={data?.purchases}
                myUserExplicitContent={data?.explicitContent}
              />
            )}
          </>
        )}
      </Layout>
    </>
  );
};

export default User;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
      process.env.NEXT_PUBLIC_REACT_ENV === "development" ? `${process.env.API_ENDPOINT_DEVELOPMENT}/profile` : `${process.env.API_ENDPOINT_PRODUCTION}/profile`,
      {
        headers: {
          authtoken: token,
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
