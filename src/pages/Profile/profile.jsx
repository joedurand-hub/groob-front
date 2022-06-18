import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";


const Profile = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    let myToken = JSON.parse(window.localStorage.getItem("token"));
    setToken(myToken);
  }, [token]);
  const { data, loading, error } = useRequest("http://localhost:8080/profile", token);


  return (
      <Layout>
        <User data={data} loading={loading} error={error}/>
      </Layout>
  );
};


    export default Profile;