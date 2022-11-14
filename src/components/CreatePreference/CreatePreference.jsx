import React from 'react'
import useAuthPost from "../../hooks/useAuthPost"
import Button from "../Button/Button"
import { ENDPOINT } from '../../helpers/constants'

const CreatePreference = () => {
    const {data, pending, error, sendData} = useAuthPost()
  
  const handlePreference = async () => {
    // sendData({
    //   endpoint: `${ENDPOINT}/preferenceProduct`,
    //   postData: {
    //     idToVerify: dataVerify?._id,
    //     title: "Verificación de cuenta - Groob.",
    //     price: 2999,
    //     descripcion: "Con la verificación de la cuenta obtenés el check azul en tu perfil. Además, en nuestro algoritmo damos múltiples beneficios a estos perfiles.",
    //     picURL: "https://tecnoartes.net/wordpress/wp-content/uploads/2021/02/check-icon-1.jpg",
    //     nombre: dataVerify?.firstName,
    //     quantity: 1,
    //     apellido: dataVerify?.lastName,
    //     email: dataVerify?.email,
    //     // direccion,
    //     // numeroDireccion,
    //     // area,
    //     // tel,
    //     // postal,
    //   },
    // });
  };

    return (
        <Button name="Comprar" variant="purchase" onClick={handlePreference}/>
  )
}

export default CreatePreference