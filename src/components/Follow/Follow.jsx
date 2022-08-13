import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";
const url = `${ENDPOINT}${FOLLOW}`;

const Follow = ({id}) => {
  console.log(id)
  const { sendData } = useAuthPost();
  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        followTo: id,
      },
    });
  };
  return (
    <div>
      <Button type="submit" onClick={handleSubmit} name="Seguir"/>
    </div>
  )
}

export default Follow
