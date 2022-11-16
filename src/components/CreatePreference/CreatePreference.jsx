import React from 'react'
import useAuthPost from "../../hooks/useAuthPost"
import Button from "../Button/Button"
import { ENDPOINT } from '../../helpers/constants'

const CreatePreference = ({accessToken, payer, price}) => {
    const {data, pending, error, sendData} = useAuthPost()
  
  const handlePreference = async () => {
    sendData({
      endpoint: `${ENDPOINT}/preferenceProduct`,
      postData: {
        userId: payer?._id,
        title: "Verificación de cuenta - Groob.",
        price: price,
        descripcion: "Con la verificación de la cuenta obtenés el check azul en tu perfil. Además, en nuestro algoritmo damos múltiples beneficios a estos perfiles.",
        picURL: "https://tecnoartes.net/wordpress/wp-content/uploads/2021/02/check-icon-1.jpg",
        nombre: payer?.firstName,
        quantity: 9999,
        apellido: payer?.lastName,
        email: payer?.email,
        // direccion,
        // numeroDireccion,
        // area,
        // tel,
        // postal,
      },
    });
  };
  console.log("data:", data)
  console.log("pending:", pending)
  console.log("error:", error)
    return (
        <Button name="Comprar" variant="purchase" onClick={handlePreference}/>
  )
}

export default CreatePreference