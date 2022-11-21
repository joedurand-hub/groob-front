import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const usePut = () => {
  const token = getCookie("authtoken")
  const router = useRouter()
  useEffect(() => {
    if(token === undefined) {
      router.push("/register");
    }
  }, [token])

  const [putData, setPutData] = useState({
    info: undefined,
    pending: false,
    error: undefined,
  });

  const sendUpdatedData = async ({endpoint, putData}) => {  
    setPutData({
      info: undefined,
      pending: true,
      error: undefined,
    });
    return axios.put(`${endpoint}`, putData, {
      headers: { 
        "authToken": token 
      }})
    .then((response) => {
        setPutData({ 
          info: response.data, 
          pending: false, 
          error: undefined });
      })
      .catch((error) => {
        setPutData({ 
          info: undefined, 
          pending: false, 
          error: error.message });
      });
  };

  return {
    sendUpdatedData,
    info: putData.info,
    pending: putData.pending,
    error: putData.error,
  };
};

export default usePut;