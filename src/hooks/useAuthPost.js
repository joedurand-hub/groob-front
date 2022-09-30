import { useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const useAuthPost = () => {
  const token = getCookie("authtoken")
  const [postData, setPostData] = useState({
    data: undefined,
    pending: false,
    error: undefined,
  });

  const sendData = async ({endpoint, postData}) => {  
    setPostData({ 
      data: undefined,
      pending: true,
      error: undefined,
    });
    return axios.post(`${endpoint}`, {...postData}, {
      headers: { 
        "authtoken": token 
      }}, {withCredentials: true} )
    .then((response) => {
        setPostData({ 
          data: response.data, 
          pending: false, 
          error: undefined });
      })
      .catch((error) => {
        setPostData({ 
          data: undefined, 
          pending: false, 
          error: error.message });
      });
  };

  return {
    sendData,
    data: postData.data,
    pending: postData.pending,
    error: postData.error,
  };
};

export default useAuthPost;