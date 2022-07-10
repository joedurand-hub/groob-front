import React from "react";
import Layout from "../components/Layout/Layout";
import MenuItem from "../components/MenuItem/MenuItem";
import Nav from "../components/Nav/Nav";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const About = () => {
  return (
    <>
      <Layout
        menuItem={
          <>
            <NavItem path="/notifications">
              <IoNotificationsOutline />
            </NavItem>
            <NavItem path="/menu">
              <GiHamburgerMenu />
            </NavItem>
          </>
        }
      ></Layout>
    </>
  );
};

export default About;
