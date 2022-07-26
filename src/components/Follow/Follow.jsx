import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";

const url = `${ENDPOINT}${FOLLOW}`;

const Follow = ({token, id}) => {
  const { sendData } = useAuthPost();
  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        sigo_a: id,
      },
      token: token,
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Seguir"/>
    </div>
  )
}

export default Follow
