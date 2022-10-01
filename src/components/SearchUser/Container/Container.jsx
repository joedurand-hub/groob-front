import { useContext } from "react";
import styles from "../User/user.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container_users_list} light_mode`
          : `${styles.container_users_list} dark_mode`
      }
    >
      {children}
    </div>
  );
};

export default Container;
