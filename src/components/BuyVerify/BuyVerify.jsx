import styles from "./buyVerify.module.css";
import Button from "../Button/Button";

const BuyVerify = ({closeCardVerify}) => {
  return (
    <div>
      <div className={styles.benefits_for_verifying}>
        <h3 style={{ textAlign: "center" }}>
          <strong>Beneficios de una cuenta verificada.</strong>
        </h3>{" "}
        <h4 className={styles.benefits}>
          Mayor confianza de los usuarios hacia ti.
        </h4>
        <h4 className={styles.benefits}>
          Mejor prescencia en resultados de búsqueda.
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
            <strong>AR $3.999 finales</strong>
          </h3>
          <Button variant="login" name="Solicitar" />
          <Button variant="cancel" onClick={closeCardVerify} name="Cerrar" />
        </div>
      </div>
    </div>
  );
};

export default BuyVerify;
