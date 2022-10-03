import { useState } from 'react'
import { IoMdShareAlt } from "react-icons/io"
import { useEffect } from 'react'

const Share = ({content, price, fileLink, postIdLink, username, description, userLink}) => {
  const [file, setFile] = useState(null)

  useEffect(() => {
    async function getFile() {
      const image = await fetch(`${fileLink}`)
      const blob = await image.blob()
      const file = new File([blob], 'Imagen')
      setFile(file)
    }
    getFile()
  }, [])

  
  const sharePost = async (data) => {
    if (navigator.share) {
      try {
        await navigator
          .share(data)
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

  // Post con texto
  const simplePost = {
    title: username,
    text: content,
    url: postIdLink
  }

    // Post con precio
    const postWithPrice = {
      title: price,
      text: content,
      url: postIdLink,
      files: [file]
    }

  // Post con foto
  const postWithOutPriceButWithImage = {
    title: username,
    text: content,
    url: postIdLink,
    files: [file]
  }


  // Perfil de usuario
  const user = {
    title: username,
    text: description,
    url: userLink,
    files: [file]
  }

  return (
    <>
      <IoMdShareAlt onClick={() => sharePost(postWithOutPriceButWithImage)}/>
    </>
  )
}

export default Share