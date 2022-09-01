import { useEffect, useState } from "react";
import { TOKEN } from "../helpers/constants";
import axios from "axios";

const usePostPublication = () => {
  const [postData, setPostData] = useState({
    data: undefined,
    pending: false,
    error: undefined,
  });
  const sendPublication = async ({endpoint, postData}) => {  
    setPostData({ 
      data: undefined,
      pending: true,
      error: undefined,
    });
    
    return axios.post(`${endpoint}`, postData, {
      headers: { 
        "authToken": TOKEN 
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