import { useState } from "react";
import axios from "axios";

const usePost = () => {
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
    return axios.post(`${endpoint}`, {...postData} )
    .then((response) => {
        setPostData({ pending: false, data: response.data, error: undefined });
      })
      .catch((error) => {
        setPostData({ pending: false, data: undefined, error: error.message });
      });
  };

  return {
    sendData,
    data: postData.data,
    pending: postData.pending,
    error: postData.error,
  };
};

export default usePost;
