import { variantToStyles } from '../../helpers/variants';
import styles from './button.module.css'
const Button = ({ name, onSubmit, onClick, type, variant, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      name={name}
      className={variantToStyles(
        styles.button,
        styles[variant],
        disabled && styles.disabled
      )}
    >
      {name}
    </button>
  );
};

export default Button;