import React from "react";
import SignIn from "../components/SignIn/SignIn";
import Layout from "../components/Layout/Layout";
import Switch from "../components/Switch/Switch";

const Login = () => {
  return (
      <Layout title="| Login">
        <SignIn />
        <Switch/>
      </Layout>
  );
};

export default Login;
