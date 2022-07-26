import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import { ENDPOINT, UNFOLLOW } from "../../helpers/constants";

const url = `${ENDPOINT}${UNFOLLOW}`;

const Unfollow = ({token, id}) => {
  const { sendData } = useAuthPost();

  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        id_del_usuario_a_dejar_de_seguir: id,
      },
      token: token,
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Dejar de seguir"/>
    </div>
  )
}

export default Unfollow
