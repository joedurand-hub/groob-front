import { useEffect } from "react";
import styles from "./buyVerify.module.css";
import Button from "../Button/Button";
import useAuthPost from "../../hooks/useAuthPost";
import { useRouter } from "next/router";
import { GoVerified } from "react-icons/go";
import { FcCheckmark } from "react-icons/fc";
// import Tooltip from "../Tooltip/Tooltip";
import { ENDPOINT } from "../../helpers/constants";

const BuyVerify = ({ closeCardVerify, dataVerify }) => {
  const router = useRouter();
  const { data, sendData } = useAuthPost();

  useEffect(() => {
    data !== undefined && router.push(data.body.init_point)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handlePreferenceToVerifyCccount = async () => {
    sendData({
      endpoint: `${ENDPOINT}/preferenceVerification`,
      postData: {
        verifyId: dataVerify?._id,
        title: "Verificación de cuenta - Groob.",
        price: 2999,
        descripcion: "Con la verificación de la cuenta obtenés el check azul en tu perfil. Además, en nuestro algoritmo damos múltiples beneficios a estos perfiles.",
        picURL: "https://tecnoartes.net/wordpress/wp-content/uploads/2021/02/check-icon-1.jpg",
        nombre: dataVerify?.firstName,
        quantity: 1,
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
        {/* <Tooltip id="verifiedButton" place="top" effect="solid" text={`Para activar esta funcionalidad completa tu perfil en "Editar perfil"`}/> */}

        <div
          className={styles.title_verified}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GoVerified style={{ fontSize: "50px", color: "rgb(46, 91, 244)" }} />
          <h3 style={{ textAlign: "center" }}>
            <strong>Verificate</strong>
          </h3>{" "}
        </div>
        <h6 className={styles.benefits}>
          <FcCheckmark style={{ fontSize: "20px", fontWeight: "bold" }} /> Mejor
          presencia en resultados de búsqueda.
          <br />
          <FcCheckmark /> Evitar perfiles falsos o duplicados. <br />
          <FcCheckmark /> Aumento de las ventas. <br />
          <FcCheckmark /> Más confianza de los usuarios hacia tí. <br />
          <FcCheckmark /> Mayor cantidad de visitas a tu perfil. <br />
          <FcCheckmark /> Destacar tu contenido entre la multitud.
        </h6>
        <p style={{ fontSize: "14px" }}>
          *Una vez realizado el pago, en esta sección te aparecerá un nuevo botón para continuar el proceso de verificación.
        </p>
        <div className={styles.benefits_actions}>
          <h3 className={styles.benefits_price}>
            <strong>AR $2.999 finales</strong>
          </h3>
          <div
          // data-tip
          // data-for="verifiedButton"
          >
            <Button
              variant={"login"}
              name="Solicitar"
              onClick={handlePreferenceToVerifyCccount}
            />
          </div>

          <Button variant="cancel" onClick={closeCardVerify} name="Cerrar" />
        </div>
      </div>
    </div>
  );
};

export default BuyVerify;
