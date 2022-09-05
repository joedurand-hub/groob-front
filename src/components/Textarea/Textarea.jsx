import styles from "./textarea.module.css";
import { useContext } from "react";
import { variantToStyles } from "../../helpers/variants";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaMicrophoneAlt } from "react-icons/fa";

const Textarea = ({variant, onChange, placeholder, maxLength}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <textarea
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
        className={
          theme
          ? variantToStyles(styles.textarea, styles.light_mode, styles[variant])
          : variantToStyles(styles.textarea, styles.dark_mode, styles[variant])
        }
      />
      <FaMicrophoneAlt className={styles.microphone}/>
    </>
  );
};

export default Textarea;
