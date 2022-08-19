import { useState, useEffect } from "react"
import Button from "../Button/Button"
import { useRouter } from "next/router"
import useAuthPost from "../../hooks/useAuthPost"

const CreateChat = ({userId, myId}) => {
    const [newChat, setNewChat] = useState("")
    const {data, loading, error, sendData} = useAuthPost()
    const router = useRouter();

    const handleNewChat = () => {
      sendData({
        userId, myId
      })
    }

  return (
    <>
        <Button variant="primary" onClick={handleNewChat}/>
    </>
  )
}

export default CreateChat