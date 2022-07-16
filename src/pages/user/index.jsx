import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCookie } from "cookies-next";
import { ENDPOINT, GET_PROFILE } from "../../helpers/constants";

const User = ({data}) => {
   return (
      <Layout
      menuItem={
        <>
          <NavItem path="/menu">
            <GiHamburgerMenu />
          </NavItem>
        </>
      }
      >
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
