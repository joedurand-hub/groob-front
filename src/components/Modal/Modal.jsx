import styles from "./modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalHandleClick = (e) => e.stopPropagation();

  return (
    <div
      className={`${isOpen ? styles.is_open : styles.modal_container}`}
    >
      <div className={styles.modal} onClick={modalHandleClick}>
        {children}
        <button className={styles.modal_close} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;