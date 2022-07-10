import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/Profile/Profile";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";

// import Posts from "../../components/Posts/Posts";

const Users = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let myToken = JSON.parse(window.localStorage.getItem("token"));
    setToken(myToken);
  }, [token]);

  const { data, loading, error } = useRequest(
    "http://localhost:8080/profile",
    token
  );

  return (
    <Layout menuItem={
      <>
      <NavItem path="/menu">
        <GiHamburgerMenu/>
      </NavItem>
      </>
    }>
      <Profile data={data} loading={loading} error={error} />
      {/* <Posts/> */}
    </Layout>
  );
};

export default Users;
