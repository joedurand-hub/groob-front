import { useForm } from "react-hook-form";

const Input = (
  {
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
    onKeyUp,
    onBlur,
    validate,
    // errorMessage,
  } 
) => {
  const {
    onChange,
    register,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        {...register(name, {
          required,
          minLength,
          maxLength,
          pattern,
          min,
          max,
          validate,
          value,
          onKeyUp,
          onBlur,
        })}
        onChange={onChange}
        placeholder={placeholder}
        // onKeyUp={onKeyUp}
        // onBlur={onBlur}
        // value={value}
      />
      {/* {errors.name?.type === 'required' && <p>{errorMessage}</p> } */}
      {/* {errors.minLength?.type === 'minLength' && <p>{errorMessage}</p> } */}
      {/* {errors.maxLength?.type === 'maxLength' && <p>{errorMessage}</p> } */}
    </div>
  );
};

export default Input;
