import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import SignIn from "../components/SignIn/SignIn";
import styles from "../styles/index.module.css";
import { getCookie } from "cookies-next";

const Login = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (token) {
  //     router.push("/feed");
  //   }
  //   else {
  //     router.push("/login");
  //   }
  // }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container} light_mode`
          : `${styles.container} dark_mode`
      }
    >
      <SignIn/>
    </div>
  );
};

export default Login;

// Login.getInitialProps = async ({ req, res }) => {
//   const token = getCookie("authToken", { req, res });
//   if (token) return { token: true };
//   else return {token: false}
// };
