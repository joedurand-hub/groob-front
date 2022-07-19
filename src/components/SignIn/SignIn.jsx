import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import logo from "../../../public/Logo.png";
import logoDarkMode from "../../../public/LogoDarkMode.png";
import usePost from "../../hooks/usePost";
import Button from "../Button/Button";
import Anchor from "../Anchor/Anchor";
import styles from "./signin.module.css";
import inputField from "../Input/input.module.css";
import Image from "next/image";
import Switch from "../Switch/Switch"
import { ENDPOINT } from "../../helpers/constants";
const url = `${ENDPOINT}/login`;

export const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const { data, pending, error, sendData } = usePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
    sendData({
      endpoint: url,
      postData: {
        email: data.email,
        password: data.password,
      },
    });
  };

  const handleNewPassword = () => {
    //method POST to /reset-password
  };

  return (
    <div
      className={
        theme
          ? `${styles.container_form}  ${styles.light_mode}`
          : `${styles.container_form}  ${styles.dark_mode}`
      }
    >
      <div className={styles.container_logo}>
        <Image
          src={theme ? logo : logoDarkMode}
          width={100}
          height={75}
          alt="Image"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          theme
          ? `${styles.form}  ${styles.light_mode}`
          : `${styles.form}  ${styles.dark_mode}`
        }
      >
        <p>
          {" "}
          ¿No posees cuenta?{" "}
          <Anchor variant="intermediate" name="Registrate" path="/" />
        </p>

        <div
          className={
            theme
              ? `${inputField.field} light_mode`
              : `${inputField.field} dark_mode`
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
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.form_text_input_error}>
              El email no puede estar vacío.
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={styles.form_text_input_error}>
              El email debe contener @ y .
            </p>
          )}
        </div>

        <div
          className={
            theme
              ? `${inputField.field} light_mode`
              : `${inputField.field} dark_mode`
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
              pattern:
                /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9 \S]{8,32}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className={styles.form_text_input_error}>
              {" "}
              La contaseña no puede estar vacía.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className={styles.form_text_input_error}>
              {" "}
              Email o contraseña incorrectos.
            </p>
          )}
        </div>

        <div className={styles.container_submit}>
          <Button
            onClick={() => {
              data && data.message === "Success" ?
              router.push("/feed") : null
            }}
            type="submit"
            name="Iniciar sesión"
            variant="primary"
          />
        </div>
        <br />
        <Anchor
          name="¿Olvidaste tu contraseña?"
          path="/"
          onClick={handleNewPassword}
        />
        {pending && <p>Cargando...</p>}
        {error && <p>{error}</p>}
      </form>
      <Switch />
    </div>
  );
};

export default SignUp;
