import styles from "./input.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { variantToStyles } from "../../helpers/variants";

const Input = ({
  label,
  name,
  placeholder,
  type,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  value,
  required,
  onChange,
  onKeyUp,
  onBlur,
  validate,
  error,
  variant = "field_input",
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.field_label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={
          theme
            ? variantToStyles(styles.field_input_light, styles[variant])
            : variantToStyles(styles.field_input_dark, styles[variant])
        }
        type={type}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        min={min}
        max={max}
        validate={validate}
        value={value}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={styles.field_input_error}>{error}</p>}
    </div>
  );
};

export default Input;
