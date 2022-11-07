import { useEffect } from "react";
import Button from "../Button/Button"
import useDelete from "../../hooks/useDelete";
import { ENDPOINT } from "../../helpers/constants";

const DeletePost = ({ postId, userId, myId }) => {
  
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
  return (
    <div>
      <Button variant="option" name="Eliminar" onClick={handleDeletePost}/>
    </div>
  )
}

export default DeletePost