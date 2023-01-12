import { useEffect } from "react"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";
import { useSocket } from "../../hooks/useSocket";
import Button from "../Button/Button"
import Unfollow from "../Unfollow/Unfollow";
import useAuthPost from "../../hooks/useAuthPost"
import styles from "./follow.module.css"

const url = `${ENDPOINT}${FOLLOW}`;

const Follow = ({id}) => {
  const { sendSocket } = useSocket()
  const { data, sendData } = useAuthPost();
  useEffect(() => {
  }, [data])
  const handleSubmit = async () => {
    sendSocket("newFollow", {"followTo": id})
    sendData({
      endpoint: url,
      postData: {
        followTo: id,
      },
    });
  };
  return (
      <div className={styles.container_follow_up}>
      {data === true ? (
              <Unfollow id={id}/>
      ) : (
        <Button type="submit" onClick={handleSubmit} name="Seguir"/>
      )}
    </div>
  )
}

export default Follow
