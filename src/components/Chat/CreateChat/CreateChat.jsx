import { useState, useEffect } from "react"
import Button from "../../Button/Button"
import { useRouter } from "next/router"
import useAuthPost from "../../../hooks/useAuthPost"

const CreateChat = () => {
    const [newChat, setNewChat] = useState("")
    const {data, loading, error, sendData} = useAuthPost()
    const router = useRouter();

  return (
    <>
        <Button />
    </>
  )
}

export default CreateChat