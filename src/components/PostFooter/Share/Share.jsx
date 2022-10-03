import React from 'react'
import { IoMdShareAlt } from "react-icons/io"

const Share = ({content, price, file, username, userLink, postLink}) => {

  const texto = {
    title: "Gran día",
    text: "Veamos por qué es un gran día hoy",
    url: "https://www.groob.com.ar/feed/6338d965da97b7306286f857"
  }


  
  const sharePost = async (post) => {
    if (navigator.share) {
      try {
        await navigator
          .share(texto)
          .then(() =>
            console.log("Largar alerta de que se está compartiendo")
          );
      } catch (error) {
        console.log(`Ups! No se pudo compartir debido a: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Tu navegador no tiene soporte para esta funcionalidad."
      );
    }
  }
  return (
    <>
      <IoMdShareAlt onClick={() => sharePost(texto)}/>
    </>
  )
}

export default Share