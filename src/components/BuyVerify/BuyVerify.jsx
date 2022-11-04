import { useEffect } from "react";
import styles from "./buyVerify.module.css";
import Button from "../Button/Button";
import useAuthPost from "../../hooks/useAuthPost";
import { useRouter } from "next/router";
import { ENDPOINT } from "../../helpers/constants";

const BuyVerify = ({ closeCardVerify, dataVerify }) => {
  const router = useRouter();
  const { data, sendData } = useAuthPost();
  console.log(data);
  useEffect(() => {
    data !== undefined && router.push(data.body.init_point)
  }, [data]);

  const handlePreferenceToVerifyCccount = async () => {
    sendData({
      endpoint: `${ENDPOINT}/prefer-verify-account`,
      postData: {
        idToVerify: dataVerify?._id,
        title: "Verificación de la cuenta en Groob.",
        price: 2999,
        quantity: 1,
        descripcion:
        
          "Con la verificación de la cuenta obtenés el check azul en tu perfil. Además, en nuestro algoritmo daremos mejor presencia en resultados de búsqueda, evitaremos perfiles falsos. Aumento de las ventas.",
        // picURL: ,
        nombre: dataVerify?.firstName,
        apellido: dataVerify?.lastName,
        email: dataVerify?.email,
        // direccion,
        // numeroDireccion,
        // area,
        // tel,
        // postal,
      },
    });
  };

  return (
    <div>
      <div className={styles.benefits_for_verifying}>
        <h3 style={{ textAlign: "center" }}>
          <strong>Beneficios de una cuenta verificada.</strong>
        </h3>{" "}
        <h4 className={styles.benefits}>
          Mayor confianza de los usuarios hacia tí.
        </h4>
        <h4 className={styles.benefits}>
          Mejor presencia en resultados de búsqueda.
        </h4>
        <h4 className={styles.benefits}>
          Demostrar autenticidad y evitar perfiles falsos.
        </h4>
        <h4 className={styles.benefits}>
          Aumento de las ventas ante mayor tráfico hacia tu perfil.
        </h4>
        <h4 className={styles.benefits}>
          Destacar tu contenido entre la multitud.
        </h4>
        <div className={styles.benefits_actions}>
          <h3 className={styles.benefits_price}>
            <strong>AR $2.999 finales</strong>
          </h3>
          <Button
            variant="login"
            name="Solicitar"
            onClick={handlePreferenceToVerifyCccount}
          />
          <Button variant="cancel" onClick={closeCardVerify} name="Cerrar" />
        </div>
      </div>
    </div>
  );
};

export default BuyVerify;
