import { useState } from "react";
import Layout from "../components/Layout/Layout";
import User from "../components/Profile/User";

const Profile = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
      <Layout>
        <User />
      </Layout>
  );
};

export default Profile;
