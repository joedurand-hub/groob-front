import { useState, useEffect } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import useRequest from "../../hooks/useRequest";
import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import Nav from "../../components/Nav/Nav";
import Anchor from "../../components/Anchor/Anchor";
import Icon from "../../components/Icon/Icon";
import Image from "next/image";

const Profile = () => {
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
    <Layout>
      <User data={data} loading={loading} error={error} />
    </Layout>
  );
};

export default Profile;
