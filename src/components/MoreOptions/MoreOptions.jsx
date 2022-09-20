import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import Icon from "../PostIcons/Icon";
import useDelete from "../../hooks/useDelete";
import { ENDPOINT } from "../../helpers/constants";

const MoreOptions = ({ idBydeletePost, userId }) => {
  const { data, pending, error, deletePostById } = useDelete();

  const handleDeletePost = () => {
    deletePostById({
      endpoint: `${ENDPOINT}/post/${idBydeletePost}`,
    });
  };
// al hacer click debe desplegar el menú dropdown y ahí ejecutar el delete

  return (
    <Icon>
      {userId === idBydeletePost ? (
        <AiOutlineMore onClick={handleDeletePost} /> 
      ) : (
        <AiOutlineMore />
      )}
    </Icon>
  );
};

export default MoreOptions;
