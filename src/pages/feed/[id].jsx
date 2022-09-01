// import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { URL, ENDPOINT, GET_PROFILE } from "../../helpers/constants";
import Post from "../../components/Post/Post"

const PostById = ({data}) => {
  console.log(data) //funciona

  return (
    // <Layout>
<article>
  probandus
        {/* <Link href={`${URL}/user/${data?.user[0]}`}> */}
          <div>
            {/* <Image
              src={"https://picsum.photos/id/237/200/300"}
              width={50}
              height={50}
              alt={`Foto de perfil de }`}
            /> */}
            {/* <a>{articulos?.username}</a> */}
          </div>
        {/* </Link> */}
        <h3>
          asd
          {/* ID del post: {data?._id} <br /> */}
        </h3>
        {/* <p> {data?.content}</p> */}
      </article>
        // </Layout>
  );
};

export default PostById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const {id} = query;
    const response = await fetch(
      `http://localhost:8080/post/${id}`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
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
