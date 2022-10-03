import { useEffect } from "react"
import Button from "../Button/Button"
import Unfollow from "../Unfollow/Unfollow";
import useAuthPost from "../../hooks/useAuthPost"
import styles from "./follow.module.css"
import { ENDPOINT, FOLLOW } from "../../helpers/constants";
const url = `${ENDPOINT}${FOLLOW}`;

const Follow = ({id}) => {
  const { data, sendData } = useAuthPost();
  useEffect(() => {
  }, [data])
  const handleSubmit = async () => {
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
        <Button type="submit" onClick={handleSubmit} name="Suscribirse"/>
      )}
    </div>
  )
}

export default Follow
