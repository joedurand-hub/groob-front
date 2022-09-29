import styles from "./walletCrypto.module.css";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

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
        <CopyToClipboard value={address}/>
      </div>
    </div>
  );
};

export default Wallet;
