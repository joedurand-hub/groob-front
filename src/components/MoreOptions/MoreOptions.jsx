import { useEffect } from "react";
import { AiOutlineMore } from "react-icons/ai";
import Icon from "../PostIcons/Icon";
import useDelete from "../../hooks/useDelete";
import { ENDPOINT } from "../../helpers/constants";

const MoreOptions = ({ postId, userId, myId }) => {
  
  const { data, pending, error, deletePostById } = useDelete();
  useEffect(() => {
    if(data) console.log(data)
    // Dar notificación de que se eliminó
    // Refrescar la página
  }, [data])
  
  const handleDeletePost = () => {
    deletePostById({
      endpoint: `${ENDPOINT}/post/${postId}`,
    });
  };
// al hacer click debe desplegar el menú dropdown y ahí ejecutar el delete

  return (
    <Icon>
      {userId === myId ? (
        <AiOutlineMore onClick={handleDeletePost} /> 
      ) : (
        <AiOutlineMore />
      )}
    </Icon>
  );
};

export default MoreOptions;
