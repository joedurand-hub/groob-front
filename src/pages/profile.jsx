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
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Layout>
        <ProfileUser />
        <button onClick={toggleTheme}>Switch Theme</button>
      </Layout>
    </ThemeProvider>
  );
};

export default Profile;
