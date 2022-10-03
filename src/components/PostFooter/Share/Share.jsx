import { useState } from 'react'
import { IoMdShareAlt } from "react-icons/io"
import { useState } from "react"
import { useEffect } from 'react'

const Share = ({content, price, fileLink, username, userLink, postLink}) => {
  const [file, setFile] = useState(null)

  useEffect(() => {

  }, [])

  
  const sharePost = async (data) => {
    if (navigator.share) {
      try {
        await navigator
          .share(post)
          .then(() =>
            console.log("Largar alerta de que se está compartiendo")
          );
      } catch (error) {
        console.log(`Ups! No se pudo compartir debido a: ${error}`);
      }
    } else {
      console.log(
        "Tu navegador no tiene soporte para esta funcionalidad."
      );
    }
  }
  const title = content ? content : username
  // Post con texto
  const postOrUser = {
    title: title,
    text: "Veamos por qué es un gran día hoy",
    url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  }

  // // Post con foto
  // const postWithImage = {
  //   title: "Gran día",
  //   text: "Veamos por qué es un gran día hoy",
  //   url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  // }

  // // Perfil de usuario

  // const user = {
  //   title: "Gran día",
  //   text: "Veamos por qué es un gran día hoy",
  //   url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  // }

  return (
    <>
      <IoMdShareAlt onClick={() => sharePost()}/>
    </>
  )
}

export default Share