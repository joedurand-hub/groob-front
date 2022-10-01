import { useState } from "react";
import axios from "axios";

const usePostPublication = () => {
  const [postData, setPostData] = useState({
    data: undefined,
    pending: false,
    error: undefined,
  });
  const sendPublication = async ({endpoint, postData, token}) => {  
    setPostData({ 
      data: undefined,
      pending: true,
      error: undefined,
    });
    
    return axios.post(`${endpoint}`, postData, {
      headers: { 
        "authtoken": token, 
      }})
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
      })
  };

  return {
    sendPublication,
    data: postData.data,
    pending: postData.pending,
    error: postData.error,
  };
};

export default usePostPublication;