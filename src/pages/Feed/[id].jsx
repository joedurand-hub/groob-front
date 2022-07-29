// import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import { URL, ENDPOINT, GET_PROFILE } from "../../helpers/constants";
import Post from "../../components/Post/Post"

const PostById = () => {


  return (
    <Layout>
      {/* <article>
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
      </article> */}
    </Layout>
  );
};

export default PostById;