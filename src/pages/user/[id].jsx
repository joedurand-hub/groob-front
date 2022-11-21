import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/ProfileById/ProfileById";
import Publications from "../../components/ProfileById/Publications/Publications";
import Products from "../../components/ProfileById/Products/Products";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Menu from "../../components/MenuDropdown/MenuDropdown";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useModal } from "../../hooks/useModal";
import { BiHome } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsFileEarmarkPost } from "react-icons/bs";
import { BiSearchAlt, BiChat } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
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
        <Menu valueSwitch={data?.profileData.explicitContent} id={data?.myId} />
      ) : (
        <>
          <Profile data={data?.profileData} id={data?.myId} />
           <div style={{ display: "flex", marginTop: "10px", gap: "75px" }}>
           {data?.profileData?.mpAccountAsociated && (
            <Tab text="Posts">
              <BsFileEarmarkPost onClick={() => setTab("publications")} />
            </Tab>
           )}
            {data?.profileData?.mpAccountAsociated && (
              <Tab text="Exclusivos">
                 <RiVipDiamondFill onClick={() => setTab("products")} />
               </Tab>
            )}
          </div>
         {tab === "publications" && (
            <Publications userId={data?.profileData._id} myId={data?.myId} />
          )}
          {tab === "products" && (
            <Products
              myId={data?.profileData._id}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default ProfileById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const { id } = query;
    const response = await fetch(
      `https://groob-back-production.up.railway.app/profile/${id}`,
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
    console.log(error);
  }
}
