import Layout from "../../components/Layout/Layout"
import Post from "../../components/Post/Post"

const Feed = ({ data }) => {
  
  return (
    <Layout>
      <Post data={data}/>
    </Layout>
  );
};

export default Feed;

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:8080/posts') // get all posts
    const data = await response.json()
    return {
      props: {
        data
      }
    } 
  } catch(error) {
    console.table(error)
  }
}