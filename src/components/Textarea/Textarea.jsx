import styles from "./textarea.module.css";
import { useContext } from "react";
import { variantToStyles } from "../../helpers/variants";
import { ThemeContext } from "../../contexts/ThemeContext";

const Textarea = ({variant="textarea", onChange, placeholder, maxLength}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <textarea
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
        className={
          theme
            ? `${styles.textarea_light_mode}`
            : `${styles.textarea_dark_mode}`
        }
      />
    </>
  );
};

export default Textarea;
