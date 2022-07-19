import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import Wallet from "../../components/Wallet/Wallet";
import { HiMenuAlt4 } from "react-icons/hi";
import { getCookie } from "cookies-next";

const User = ({data}) => {

   return (
      <Layout
      menuItem={
        <>
          <NavItem path="/menu">
            <HiMenuAlt4 />
          </NavItem>
        </>
      }>
        <Wallet/>
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
