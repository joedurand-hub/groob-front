import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { URL, ENDPOINT, GET_PROFILE } from "../../helpers/constants";
import Post from "../../components/Post/Post"

const PostById = ({ data }) => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    fetch(`${ENDPOINT}${GET_PROFILE}/${data.user[0]}`)
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
      });
  }, []);

  console.log("articulos:", articulos)

  return (
    <Layout>
      <article>
        <Link href={`${URL}/User/${data?.user[0]}`}>
          <div>
            <Image
              src={"https://picsum.photos/id/237/200/300"}
              width={50}
              height={50}
              alt={`Foto de perfil de }`}
            />
            <a>{articulos?.username}</a>
          </div>
        </Link>
        <h3>
          ID del post: {data?._id} <br />
        </h3>
        <p> {data?.content}</p>
      </article>
    </Layout>
  );
};

export default PostById;

export async function getStaticPaths() {
  try {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();

    return {
      paths: data.map((obj) => ({ params: { id: `${obj._id}` } })),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`http://localhost:8080/post/${params.id}`);
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
