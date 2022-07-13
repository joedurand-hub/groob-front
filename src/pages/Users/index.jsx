import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCookie } from 'cookies-next';

const Users = ({data}) => {
  return (
    <Layout menuItem={
      <>
      <NavItem path="/menu">
        <GiHamburgerMenu/>
      </NavItem>
      </>
    }>
      <Profile data={data}  />
      {/* <Posts/> */}
    </Layout>
  );
};

export default Users;


export async function getServerSideProps({req, res}) {
    const token = getCookie('authToken', {req, res})
    const response = await fetch('http://localhost:8080/profile',{ headers: { "authToken": token }})
    const data = await response.json()
    return { props: { data } } 
}