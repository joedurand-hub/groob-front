import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import Wallet from "../../components/Wallet/Wallet";
// import Modal from "../../components/Modal/Modal"
// import { HiMenuAlt4 } from "react-icons/hi";
// import { useModal } from "../hooks/useModal";
import { getCookie } from "cookies-next";

const User = ({data}) => {
  // const [isOpenModal, openModal, closeModalMenu] = useModal(false);

   return (
      <Layout
      menuItem={
        <>
          <NavItem path="/menu">
            {/* <HiMenuAlt4 onClick={openModal}/> */}
          </NavItem>
        </>
      }>
        {/* <Modal isOpen={isOpenModal} closeModal={closeModalMenu}> */}
          {/* <h1>Holis</h1> */}
        {/* </Modal> */}
      <Profile data={data} />
    </Layout>
  );
};

export default User;

export async function getServerSideProps({req, res}) {
  try {
    const token = getCookie("authToken", {req, res});
    const response = await fetch(`http://localhost:8080/profile`, {
      headers: { 
        "authToken": token 
      }}, {
        withCredentials: true
      })
    const data = await response.json()
    return {
      props: {
        data
      },
    };
  } catch(error) {
    console.table(error)
  }
}
