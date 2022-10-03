import React from 'react'
import { IoMdShareAlt } from "react-icons/io"

const Share = ({content, price, file}) => {

  const texto = {
    title: "Gran día",
    text: "Veamos por qué es un gran día hoy",
    url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  }
  
  const sharePost = (post) => {
    if(navigator.share) {
      navigator.share(post)
      .then(() => console.log("Ey, funciona!")
      .catch(error => console.log("Error al compartir", error)))
    } else {
      console.log("No soportado")
    }
  }
  return (
    <>
      <IoMdShareAlt onClick={() => sharePost(texto)}/>
    </>
  )
}

export default Share