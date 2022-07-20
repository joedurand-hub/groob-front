import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../contexts/ThemeContext";
import SignUp from "../components/SignUp/SignUp";
import styles from "../styles/index.module.css";
import { getCookie } from "cookies-next";

const Home = ({token}) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (token) {
      router.push("/feed");
    }
    else {
      router.push("/")
    }
  }, []);

  return (
    <div
      className={
        theme
          ? `${styles.container} light_mode`
          : `${styles.container} dark_mode`
      }
    >
      <SignUp />
    </div>
  );
};

export default Home;

Home.getInitialProps = async ({ req, res }) => {
  const token = getCookie("authToken", { req, res });
  if (token) return { token: true };
  else return {token: false}
};
