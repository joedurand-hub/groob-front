import { useState, useEffect } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import useRequest from "../../hooks/useRequest";
import Layout from "../../components/Layout/Layout";
import User from "../../components/Profile/User";
import Nav from "../../components/Nav/Nav";
import Anchor from "../../components/Anchor/Anchor";
import Icon from "../../components/Icon/Icon";
import Image from "next/image";

const Feed = () => {
 
  return (
    <Layout>
      <Image src={"https://static.pintzap.com/img/pics/t/600/1655624477_creare-mi-propia-red-social-con-juegos-de-azar-y-mujerzuelas.png"} width={400} height={400}/>
    </Layout>
  );
};

export default Feed;
