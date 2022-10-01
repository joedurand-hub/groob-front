import { useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

const usePut = () => {
  const token = getCookie("authtoken")
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