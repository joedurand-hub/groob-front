import styles from "./footer.module.css";

function Footer({children}) {
  return (
    <footer className={styles.content}>
        {children}
    </footer>
  );
}

export default Footer;
