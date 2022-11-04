import { useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const useDelete = () => {
  const token = getCookie("authtoken")
  const [deleteOnePost, setDeleteOnePost] = useState({
    data: undefined,
    pending: false,
    error: undefined,
  });

  const deletePostById = async ({endpoint}) => {  
    setDeleteOnePost({ 
      data: undefined,
      pending: true,
      error: undefined,
    });
    return axios.delete(`${endpoint}`, {
      headers: { 
        "authtoken": token 
      }}, {withCredentials: true} )
    .then((response) => {
        setDeleteOnePost({ 
          data: response.data, 
          pending: false, 
          error: undefined });
      })
      .catch((error) => {
        setDeleteOnePost({ 
          data: undefined, 
          pending: false, 
          error: error.message });
      });
  };

  return {
    deletePostById,
    data: deleteOnePost.data,
    pending: deleteOnePost.pending,
    error: deleteOnePost.error,
  };
};

export default useDelete;