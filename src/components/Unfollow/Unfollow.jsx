import { useEffect } from "react"
import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import Follow from "../Follow/Follow";
import styles from "./unfollow.module.css"
import { ENDPOINT, UNFOLLOW } from "../../helpers/constants";
const url = `${ENDPOINT}${UNFOLLOW}`;

const Unfollow = ({id}) => {
  const { data, sendData } = useAuthPost();
  useEffect(() => {
  }, [data])
  
  const handleSubmit = async () => {
    sendData({
      endpoint: url,
      postData: {
        idOfTheUserToUnfollow: id,
      },
    });
  };
  return (
    <div className={styles.container_follow_up}>
      {data === true ? (
              <Follow id={id}/>
      ) : (
      <Button type="submit" onClick={handleSubmit} name="Dejar de seguir"/>
      )}
    </div>
  )
}

export default Unfollow
