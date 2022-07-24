import styles from "./input.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";
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
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.field}>
      {label && <label className={styles.field_label} htmlFor={name}>{label}</label>}
      <input
        className={
          theme
            ? `${inputField.field_input} ${inputField.field_input_light}`
            : `${inputField.field_input} ${inputField.field_input_dark}`
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
      {/* {error.minLength?.type === 'minLength' && <p>{errorMessage}</p> } */}
      {/* {error.maxLength?.type === 'maxLength' && <p>{errorMessage}</p> } */}
    </div>
  );
};

export default Input;
