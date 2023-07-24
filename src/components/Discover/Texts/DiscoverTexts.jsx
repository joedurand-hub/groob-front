import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { ENDPOINT } from "../../../helpers/constants";
import Image from "next/image";
import axios from "axios"
import Link from "next/link";
import styles from "./discoverTexts.module.css";
import Posts from "../../Post/Post";

const DiscoverTexts = () => {
  const router = useRouter();
  const token = getCookie("authtoken");
  const [data, setData] = useState("")
  console.log(data)

  useEffect(() => {
    if (token === undefined) {
      return router.push("/register");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { theme } = useContext(ThemeContext);
  const [explicitContent, setExplicitContent] = useState("");

  useEffect(() => {
    let valueAdultContent = window.localStorage.getItem("adultContent");
    if (valueAdultContent) setExplicitContent(JSON.parse(valueAdultContent));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const discoverTexts = async () => {
      const { data } = await axios.get(
        `${ENDPOINT}/discover-texts`,
        { headers: { authtoken: token } },
        { withCredentials: true }
      );
      setData(data);
    };
     discoverTexts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={
        theme
          ? `${styles.container_discover} light_mode`
          : `${styles.container_discover} dark_mode`
      }
    >
       <Posts data={data}/>
    </div>
  );
};

export default DiscoverTexts;
