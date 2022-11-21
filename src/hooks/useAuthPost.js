import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";

const useAuthPost = () => {
  const router = useRouter()
  const token = getCookie("authtoken")

  useEffect(() => {
    if(token === undefined) {
      router.push("/register");
    }
  }, [token])

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