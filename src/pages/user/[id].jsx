import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { useModal } from "../../hooks/useModal";
import { BiHeart, BiHome } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsFileEarmarkPost } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md"
import { FaUser } from "react-icons/fa";
import { ENDPOINT } from "../../helpers/constants";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/ProfileById/ProfileById";
import Publications from "../../components/ProfileById/Publications/Publications";
import Products from "../../components/ProfileById/Products/Products";
import Favourites from "../../components/Favourites/Favourites";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import Tab from "../../components/Tab/Tab";
import OpenModalPost from "../../components/CreatePost/OpenModalPost/OpenModalPost";

const ProfileById = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("publications");
  const [isOpenModalPost, openModalPost, closeModalPost] = useModal(false);
  return (
    <Layout
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
              <MdOutlineExplore />
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
        <Menu valueSwitch={data?.explicitContent} id={data?.myId} />
      ) : (
        <>
          <Profile data={data} id={data?.myId} />
          <div style={{ display: "flex", marginTop: "10px", gap: "20px" }}>
            {(
            <Tab text="Posts">
              <BsFileEarmarkPost onClick={() => setTab("publications")} />
            </Tab>
            )}

            {data?.mpAccountAsociated && (
            <Tab text="Exclusivos">
              <RiVipDiamondFill onClick={() => setTab("products")} />
            </Tab>
            )}

            {(
            <Tab text="Favoritos">
              <BiHeart onClick={() => setTab("favourites")} />
            </Tab>
            )}
          </div>
          {tab === "publications" && (
            <Publications userId={data?._id} myId={data?.myId} />
          )}
          {tab === "products" && <Products myId={data?._id} />}
          {tab === "favourites" && <Favourites />}
        </>
      )}
    </Layout>
  );
};

export default ProfileById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authtoken", { req, res });
    if (!token) {
      res.writeHead(302, { Location: '/login' });
      res.end();
    }
    const { id } = query;
    const response = await fetch(
      `${ENDPOINT}/profile/${id}`,
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
    console.error(error);
    return {
      props: {},
    };
  }
}
