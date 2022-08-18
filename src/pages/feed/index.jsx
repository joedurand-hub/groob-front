import Layout from "../../components/Layout/Layout";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import NavItem from "../../components/NavItem/NavItem";
import { FaRegComment } from "react-icons/fa";
import { getCookie } from "cookies-next";

const Feed = ({data}) => {
  console.log(data)
  return (
    <Layout
      menuItem={
        <>
          <NavItem path="/chat">
            <FaRegComment />
          </NavItem>
        </>
      }
    >
      <CreatePost />
      {data ? (
        <Post data={data} />
      ) : (
        <h6>
          Aún no hay publicaciones, descubre usuarios en la sección de la lupa o
          invita a tus amigos!
        </h6>
      )}
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps({req, res}) {
  try {
    const token = getCookie("authToken", {req, res});
    const response = await fetch(`http://localhost:8080/posts`, {
      headers: { 
        "authToken": token 
      }}, {
        withCredentials: true
      })
    const data = await response.json()
    return {
      props: {
        data
      },
    };
  } catch(error) {
    console.table(error)
  }
}
