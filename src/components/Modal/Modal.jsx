import styles from "./modal.module.css";
import {IoIosCloseCircle} from "react-icons"

const Modal = ({ isOpen, closeModal, children }) => {
  const modalHandleClick = (e) => e.stopPropagation();

  return (
    <div
      className={`${isOpen ? styles.is_open : styles.modal_container}`}
    >
      <div className={styles.modal} onClick={modalHandleClick}>
        {children}
      </div>
    </div>
  );
}

export default Modal;