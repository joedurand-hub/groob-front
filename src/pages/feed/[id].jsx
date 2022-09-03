// import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { URL, ENDPOINT, GET_PROFILE } from "../../helpers/constants";
import PostById from "../../components/PostById/PostById"
import GoBack from "../../components/GoBack/Back";

const Index = ({data}) => {
  // console.log(data) //funciona

  return (
    <>
    <div>
      <GoBack path="/feed" />
    </div>
    <PostById data={data}/>
    </>
  );
};

export default Index;

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
