import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import Icon from "../../components/Icon/Icon";
import Nav from "../../components/Nav/Nav";
import NavItem from "../../components/NavItem/NavItem";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import { getCookie } from "cookies-next";
import { TiHome } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs"; // icon user Secret by Premium (?)
import { BiUser, BiChat } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Feed = ({ data }) => {
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
              <TiHome />
            </NavItem>
            <NavItem path="/search">
              <BiSearchAlt />
            </NavItem>
            <BsFillPlusCircleFill
              onClick={openModalPost}
              style={{
                height: "30px",
                width: "30px",
                color: "rgb(159, 29, 240)",
              }}
            />
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
      {data ? (
        <div style={{ "marginTop": "20px" }}>
          <Post data={data} />
        </div>
      ) : (
        <h6>
          Aún no hay publicaciones, descubre usuarios en la sección de la lupa o
          invita a tus amigos!
        </h6>
      )}
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/posts`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
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
