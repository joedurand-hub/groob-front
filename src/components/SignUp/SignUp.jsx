import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import usePost from "../../hooks/usePost";
import Button from "../Button/Button";
import Anchor from "../Anchor/Anchor";
import Loader from "../Loader/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import styles from "./signup.module.css";
import inputField from "../Input/input.module.css";
import logo from "../../../public/Logo.png";
import Image from "next/image";

export const SignUp = () => {
  const url = "https://groob-backend-production.up.railway.app/signup";
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
        userName: data.userName,
        email: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    data && data.message === "Success" && router.push("/user");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div
      className={
        theme
          ? `${styles.container_form} ${styles.light_mode}`
          : `${styles.container_form} ${styles.dark_mode}`
      }
    >
      <div className={styles.container_logo}>
        <Image src={logo} width={100} height={75} alt="Image" />
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
          ¿Ya posees cuenta?{" "}
          <Anchor variant="intermediate" name="Inicia sesión" path="/login" />
        </p>

        <div
          className={
            theme
              ? `${inputField.field} ${styles.light_mode}`
              : `${inputField.field} ${styles.dark_mode}`
          }
        >
          <input
            placeholder="Usuario"
            autoComplete="off"
            className={
              theme
                ? `${inputField.field_input} ${inputField.field_input_light}`
                : `${inputField.field_input} ${inputField.field_input_dark}`
            }
            type="userName"
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 16,
              // pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
            })}
          />
          {/* {errors.username?.type === "pattern" && <p className={styles.field_text_input_error}> Sólo se permiten los caracteres . y _ ejemplo: john_smith </p>} */}
          {errors.userName?.type === "required" && (
            <p className={styles.field_text_input_error}>
              {" "}
              El nombre de usuario no debe estar vacío.{" "}
            </p>
          )}
          {errors.userName?.type === "minLength" && (
            <p className={styles.field_text_input_error}>
              El nombre debe ser mayor a 3 letras.{" "}
            </p>
          )}
          {errors.userName?.type === "maxLength" && (
            <p className={styles.field_text_input_error}>
              El nombre debe ser menor a 16 letras.{" "}
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
            autoComplete="off"
            className={
              theme
                ? `${inputField.field_input} ${inputField.field_input_light}`
                : `${inputField.field_input} ${inputField.field_input_dark}`
            }
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.field_text_input_error}>
              {" "}
              El email no puede estar vacío.{" "}
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={styles.field_text_input_error}>
              {" "}
              El email debe contener arroba y punto.{" "}
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
            autoComplete="off"
            className={
              theme
                ? `${inputField.field_input} ${inputField.field_input_light}`
                : `${inputField.field_input} ${inputField.field_input_dark}`
            }
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              minLength: 6,
              maxLength: 16,
              required: true,
              pattern: regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/),
            })}
          />
          {errors.password?.type === "required" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña no puede estar vacía.{" "}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña debe tener más de 6 caracteres.{" "}
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña debe ser menor a 16 <br /> caracteres.{" "}
            </p>
          )}
          {errors.passowrd?.type === "pattern" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña debe contener entre 6 y 16 caracteres y al menos 1
              caracter alfanumérico.{" "}
            </p>
          )}
        </div>

        <section className={styles.field_terms_link}>
          <p>
            Al registrarte aceptas nuestros{" "}
            <Anchor
              variant="small"
              name="Términos y Condiciones."
              path="/terms"
            />
          </p>
        </section>
        <div>
          <Button type="submit" name="Registrarme" variant="login" />
        </div>
        {pending && (
          <>
            <br />
            <Loader />
          </>
        )}
        {error &&
          toast.error("Ups! Ha ocurrido un error.", {
            position: "bottom-center",
            autoClose: "3000",
          })}
        {data?.message === "Success" &&
          toast.success("Registro exitoso! Redireccionando.", {
            position: "bottom-center",
            autoClose: "3000",
          })}
        <Toaster />
      </form>
    </div>
  );
};

export default SignUp;
