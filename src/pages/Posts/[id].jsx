import React from "react";
import Link from "next/link";

const PostById = ({ data }) => {
  console.log("data en postById:", data);
  return (
    <article>
      <h3>
        {data.id} - {data.title}
      </h3>
      <p>{data.body}</p>
    </article>
  );
};

export default PostById;

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
