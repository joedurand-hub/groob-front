import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCookie } from "cookies-next";
import useRequest from "../../hooks/useRequest";
import { API, GET_PROFILE } from "../../helpers/constants";

const Users = ({data, loading, error}) => {
console.log(data, loading, error)

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
      {/* {isLoading && <p>Loading...</p>}
      {isError && <p>Error: no se pudo traer la info...</p>}
      {isSuccess && (
        )} */}
        <Profile data={data} />
      {/* <Posts/> */}
    </Layout>
  );
};

export default Users;

export async function getServerSideProps({req, res}) {
  const token = getCookie("authToken", {req, res});

  const {data, loading, error} = useRequest(`${API}/${GET_PROFILE}`, token)

  return {
    props: {
      data, loading, error
    },
  };
}
