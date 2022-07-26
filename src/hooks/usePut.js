import { useState } from "react";
import axios from "axios";

const usePut = () => {
  const [putData, setPutData] = useState({
    data: undefined,
    pending: false,
    error: undefined,
  });

  const sendData = async ({endpoint, putData, token}) => {  
    setPutData({
      data: undefined,
      pending: true,
      error: undefined,
    });
    return axios.put(`${endpoint}`, {...putData}, {
      headers: { 
        "authToken": token 
      }}, {withCredentials: true} )
    .then((response) => {
        setPutData({ 
          data: response.data, 
          pending: false, 
          error: undefined });
      })
      .catch((error) => {
        setPutData({ 
          data: undefined, 
          pending: false, 
          error: error.message });
      });
  };

  return {
    sendData,
    data: putData.data,
    pending: putData.pending,
    error: putData.error,
  };
};

export default usePut;