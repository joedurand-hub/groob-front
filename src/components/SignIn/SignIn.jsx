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
import inputField from "../input.module.css";
import Image from "next/image";

const url = "http://localhost:8080/login";

export const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const { data, pending, error, sendData } = usePost();

  useEffect(() => {
    if (data) {
      window.localStorage.setItem("token", JSON.stringify(data));
    }
  }, [data]);

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
          ? `${styles.container_form} ${styles.light_mode}`
          : `${styles.container_form} ${styles.dark_mode}`
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
            ? `${styles.form} ${styles.light_mode}`
            : `${styles.form} ${styles.dark_mode}`
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
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.form_text_input_error}>
              {" "}
              El email no puede estar vacío.{" "}
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={styles.form_text_input_error}>
              {" "}
              El email debe contener @ y .{" "}
            </p>
          )}
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
              pattern:
                /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9 \S]{8,32}$/,
            })}
          />
        </div>

        <div className={styles.container_submit}>
          <Button
            onClick={() => {
              router.push("/Feed/Feed");
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
    </div>
  );
};

export default SignUp;
