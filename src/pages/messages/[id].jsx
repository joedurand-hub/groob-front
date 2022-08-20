import React from "react";
import { getCookie } from "cookies-next";

// Esta ruta recibe el componente de Conversación entre los 2 usuarios.

// Con esa data traigo y renderizo la conversación


const Messages = ({ data }) => {
  console.log(data)
  return <div>probando wey</div>;
};

export default Messages;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const { id } = query;
    const response = await fetch(
      `http://localhost:8080/chat/${id}`,
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
