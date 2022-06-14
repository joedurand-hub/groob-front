import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import usePost from "../../hooks/usePost";
import Button from "../Button/Button";
import Anchor from "../Anchor/Anchor";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import styles from "./signup.module.css";
import inputField from "../input.module.css";

let url = "http://localhost:8080/signup";
let token;
export const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const { data, pending, error, sendData } = usePost( );
  const { register, handleSubmit, formState: { errors } } = useForm();



  const router = useRouter();
  const validateWithExpressions = {
    username: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:
      /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9 \S]{8,32}$/,
  };
  const onSubmit = (data) => {
    sendData({ endpoint: url, postData: { username: data.username, email: data.email, password: data.password }})
    token = window.localStorage.setItem("token", JSON.stringify(data));
    console.log(data)
    return token;
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
      className={
        theme
          ? `${styles.form} ${styles.light_mode}`
          : `${styles.form} ${styles.dark_mode}`
      }
    >
      <p>
        {" "}
        ¿Ya posees cuenta? <Anchor name="Inicia sesión" path="/login" />
      </p>

      <div
        className={
          theme
            ? `${inputField.field} ${styles.light_mode}`
            : `${inputField.field} ${styles.dark_mode}`
        }
      >
        <input
          placeholder="Username"
          autoComplete="off"
          className={
            theme
              ? `${inputField.form_input} ${inputField.form_input_light}`
              : `${inputField.form_input} ${inputField.form_input_dark}`
          }
          type="text"
          {...register("username", {
            required: true, 
            minLength: 3,
            maxLength: 16,
            // pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
          })}
        />
        {/* {errors.username?.type === "pattern" && <p> Sólo se permiten los caracteres . y _ ejemplo: john_smith </p>} */}
        {errors.username?.type === "required" && <p> El nombre de usuario es requerido. </p>}
        {errors.username?.type === "minLength" && <p>El nombre debe ser mayor a 3 letras </p>}
      </div>

      <div
        className={
          theme
            ? `${inputField.field} ${styles.light_mode}`
            : `${inputField.field} ${styles.dark_mode}`
        }
      >
        <input
          autoComplete="off"
          className={
            theme
              ? `${inputField.form_input} ${inputField.form_input_light}`
              : `${inputField.form_input} ${inputField.form_input_dark}`
          }
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: validateWithExpressions.email,
          })}
        />
           {errors.pattern?.type === "pattern" && <p> Sólo se permiten los caracteres . y _ ejemplo: john_smith </p>}
        {errors.username?.type === "required" && <p> El nombre de usuario es requerido. </p>}
        {errors.minLength?.type === "required" && <p> Sólo se permiten los caracteres . y _ ejemplo: john_smith </p>}
      </div>

      <div
        className={
          theme
            ? `${inputField.field} ${styles.light_mode}`
            : `${inputField.field} ${styles.dark_mode}`
        }
      >
        <input
          className={
            theme
              ? `${inputField.form_input} ${inputField.form_input_light}`
              : `${inputField.form_input} ${inputField.form_input_dark}`
          }
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: validateWithExpressions.password,
          })}
        />
      </div>

      <section className={styles.form_terms_link}>
        <Anchor
          name="Al registrarte aceptas nuestros Términos y Condiciones"
          path="/terms"
        />
      </section>
      <div>
        <input
          // onClick={() => {
          //   router.push("/terms");
          // }}
          type="submit"
          name="Registrarme"
          variant="primary"
        />
      </div>
    </form>
  );
};

export default SignUp;
