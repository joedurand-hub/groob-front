import React from "react";

const PostById = ({data}) => {
  console.log(data)
  return (
    <article>
      <h3>
        {data._id} - {data.content}
      </h3>
      <p>{data.body}</p>
    </article>
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
      `http://localhost:8080/posts/${params.id}`);
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

