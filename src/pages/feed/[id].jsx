import { useContext } from "react";
import { getCookie } from "cookies-next";
import PostById from "../../components/PostById/PostById";
import GoBack from "../../components/GoBack/Back";
import { ThemeContext } from "../../contexts/ThemeContext";

const Index = ({ data }) => {
  const token = getCookie("authtoken")
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme ? "light_mode" : "dark_mode"}
      style={{ "height": "100%", paddingTop: "5px" }}
    >
      <GoBack path={token ? "/feed" : "/"} />
      <div
        style={{
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
        }}
      >
        <PostById data={data} />
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const { id } = query;
    const response = await fetch(
      `https://groob-back-production.up.railway.app/post/${id}`,
      {
        headers: {
          authtoken: token,
        },
      credentials: 'include'
    }
  );
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
