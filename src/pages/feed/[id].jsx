import { useState, useEffect, useContext } from "react";
import { getCookie } from "cookies-next";
import PostById from "../../components/PostById/PostById";
import GoBack from "../../components/GoBack/Back";
import { ThemeContext } from "../../contexts/ThemeContext";

const Index = ({ data }) => {
  console.log(data)
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={theme ? "light_mode" : "dark_mode"}
      style={{ "height": "100vh", paddingTop: "5px" }}
    >
      <GoBack path="/feed" />
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
      `http://localhost:8080/post/${id}`,
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
