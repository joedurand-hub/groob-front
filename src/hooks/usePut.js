import { useState } from "react";
import axios from "axios";

const usePut = () => {
  const [putData, setPutData] = useState({
    info: undefined,
    pending: false,
    error: undefined,
  });

  const sendUpdatedData = async ({endpoint, putData, token}) => {  
    setPutData({
      info: undefined,
      pending: true,
      error: undefined,
    });
    return axios.put(`${endpoint}`, {...putData}, {
      headers: { 
        "authToken": token 
      }}, {withCredentials: true} )
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