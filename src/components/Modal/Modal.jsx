import styles from "./modal.module.css";

const Modal = ({ isOpen,  children }) => {
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