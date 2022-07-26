import Layout from "../../components/Layout/Layout";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import NavItem from "../../components/NavItem/NavItem";
import { BsChatFill } from "react-icons/bs";

const Feed = ({ data }) => {
  return (
    <Layout
      menuItem={
        <>
          <NavItem path="/messages">
            <BsChatFill />
          </NavItem>
        </>
      }
    >
      <div>
        <CreatePost />
        <Post data={data} />
      </div>
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:8080/posts"); // get all posts
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
