import styles from "./wallet.module.css"

const Wallet = () => {
  return (
    <div className={styles.container_wallet}>
      {/* Agregar copy to clipboard */}
      <br />
      <h5>Cuentas bancarias y billeteras</h5> <br />
      <strong>Entidad:</strong> Mercado Pago <br />
      <strong>CVU:</strong> 0000003100027978940501 <br />
      <strong>ALIAS:</strong> joe.ars.mp <br />
    </div>
  );
};

export default Wallet;
