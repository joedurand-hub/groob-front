import { useState } from "react";
import { lightTheme, darkTheme } from "../styles/global";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import ProfileUser from "../components/Profile/ProfileUser";

const Profile = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
      <Layout>
        <ProfileUser />
      </Layout>
  );
};

export default Profile;
