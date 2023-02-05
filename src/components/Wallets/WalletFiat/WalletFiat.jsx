import styles from "./walletFiat.module.css";

const Wallet = ({ userName, entidad, CBU, CVU, alias }) => {
  return (
    <div className={styles.container_wallet}>
      {/* Agregar copy to clipboard */}
      <br />
      <h5>Cuentas bancarias y billeteras de {userName}</h5> <br />
      <strong>Entidad:</strong> {entidad} <br />
      {CBU ? (
        <div>
          <strong>CBU:</strong> <p>{CBU}</p>
        </div>
      ) : (
        <div>
          <strong>CVU:</strong> <p>{CVU}</p>
        </div>
      )}
      <strong>ALIAS:</strong> {alias} <br />
    </div>
  );
};

export default Wallet;
