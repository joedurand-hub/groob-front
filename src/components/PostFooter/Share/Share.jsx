import { useState } from 'react'
import { IoMdShareAlt } from "react-icons/io"
import { useEffect } from 'react'

const Share = ({content, price, fileLink, postIdLink, username, description, userLink}) => {
  const [file, setFile] = useState(null)

  // fileLink es un array de imágenes
  // cada posición contiene public_id, secure_url

  const images = fileLink?.map(image => image.secure_url)
  // Necesito iterar sobre el array de imágenes
  // Y a cada una convertirla en blob para luego almacenarla

  useEffect(() => {
    async function getFile() {
      const image = await fetch(`${images[0]}`)
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

  // Post con foto
  const postWithOutPriceButWithImage = {
    title: username ? username : price,
    text: content ? content : "Groob",
    url: postIdLink,
  }


  // Perfil de usuario
  const user = {
    title: username,
    text: description,
    url: userLink,
    files: fileLink &&  [file]
  }

  return (
    <>
      <IoMdShareAlt onClick={() => sharePost(postWithOutPriceButWithImage)}/>
    </>
  )
}

export default Share