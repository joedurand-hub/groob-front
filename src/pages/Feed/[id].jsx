import { useState, useEffect } from "react";
import Link from "next/link"
import Layout from "../../components/Layout/Layout";
import { URL, ENDPOINT, GET_PROFILE } from "../../helpers/constants";
const PostById = ({data}) => {
  const [articulos, setArticulos] = useState([])
  useEffect(() => {
    fetch(`${ENDPOINT}${GET_PROFILE}/${data.user[0]}`)
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
      })
  }, [])
  
  return (
    <Layout>
    <article>
        <h1>
            <Link href={`${URL}/user/${data?.user[0]}`}>
            <a>
                {articulos.username}
            </a>
            </Link>
        </h1>
      <h3>
       ID del post: {data?._id} <br/>
      </h3>
       <p> {data?.content}</p>
    </article>
    </Layout>
  );
};

export default PostById;

export async function getStaticPaths() {
  try {
    const response = await fetch('http://localhost:8080/posts') 
    const data = await response.json()
    const paths = data.map(obj => ({ params: { id: `${obj._id}` } }));

    return {
      paths,
      fallback: true,
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `http://localhost:8080/post/${params.id}`);
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

