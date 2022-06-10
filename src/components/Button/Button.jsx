
const Button = ({ name, onSubmit, onClick, type, variant, disabled, ...rest }) => {
  return (
    <button
    {...rest}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    name={name}
    >
      {name}
    </button>
  );
};

export default Button;