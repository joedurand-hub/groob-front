import { getCookie } from "cookies-next";
import Slider from "../components/Slider/Slider";
import Posts from "../components/Post/Post";
import Image from "next/image";

const images = ({ posts }) => {
    return (
      <div>
        <Posts   data={posts.data}/>
      </div>
    );
  }

export default images;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
      `https://groob-back-production.up.railway.app/posts`,
      {
        method: "GET",
        headers: {
          authtoken: token,
        },
        credentials: "include",
      }
    );
    const posts = await response.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
