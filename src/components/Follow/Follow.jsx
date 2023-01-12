import { useEffect } from "react"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";
import Button from "../Button/Button"
import Unfollow from "../Unfollow/Unfollow";
import useAuthPost from "../../hooks/useAuthPost"
import styles from "./follow.module.css"

const Follow = ({ id }) => {
  const { data, sendData } = useAuthPost();
  useEffect(() => {
  }, [data])

  const handleSubmit = async () => {
    sendData({
      endpoint: `${ENDPOINT}/notification`,
      postData: {
        userFollowId: id,
      },
    });
    sendData({
      endpoint: `${ENDPOINT}${FOLLOW}`,
      postData: {
        followTo: id,
      },
    });
  };
  return (
    <div className={styles.container_follow_up}>
      {data === true ? (
        <Unfollow id={id} />
      ) : (
        <Button type="submit" onClick={handleSubmit} name="Seguir" />
      )}
    </div>
  )
}

export default Follow
