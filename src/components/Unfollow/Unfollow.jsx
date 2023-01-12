import { useEffect } from "react"
import Button from "../Button/Button"
import useAuthPost from "../../hooks/useAuthPost"
import Follow from "../Follow/Follow";
import styles from "./unfollow.module.css"
import { ENDPOINT, UNFOLLOW } from "../../helpers/constants";

const Unfollow = ({id}) => {
  const { data, sendData } = useAuthPost();
  useEffect(() => {
  }, [data])
  
  const handleSubmit = async () => {
    sendData({
      endpoint: `${ENDPOINT}/notification`,
      postData: {
        userUnfollowId: id,
      },
    });
    sendData({
      endpoint: `${ENDPOINT}${UNFOLLOW}`,
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
