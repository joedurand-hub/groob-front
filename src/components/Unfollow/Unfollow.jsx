import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import { ENDPOINT, UNFOLLOW } from "../../helpers/constants";
const url = `${ENDPOINT}${UNFOLLOW}`;

const Unfollow = ({id}) => {
  const { sendData } = useAuthPost();

  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        idOfTheUserToUnfollow: id,
      },
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Dejar de seguir"/>
    </div>
  )
}

export default Unfollow
