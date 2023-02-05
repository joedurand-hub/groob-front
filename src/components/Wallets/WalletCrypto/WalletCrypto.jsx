import styles from "./walletCrypto.module.css";
// import CopyToClipboard from "../../CopyToClipboard/CopyToClipboard";

// El componente Wallet renderiza una interfaz de usuario que muestra información 
// sobre el usuario, la moneda criptográfica, la red, 
// la dirección de la moneda, y permite al usuario copiar 
// la dirección en su portapapeles utilizando el componente CopyToClipboard.

const Wallet = ({ userName, coin, red, address }) => {
  return (
    <div className={styles.container_wallet}>
      <>
        <br />
        <h5>Redes y Direcciones de {userName}</h5> <br />
        <strong>Moneda:</strong> {coin}
        <br />
        <strong>Red:</strong> {red} <br />
        <p>
          <strong>Address:</strong> {address}
        </p>
      </>
      <div>
        <CopyToClipboard value={address} />
      </div>
    </div>
  );
};

export default Wallet;
