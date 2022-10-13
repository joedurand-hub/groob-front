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
import { setCookie, getCookie } from "cookies-next";
import { ENDPOINT } from "../../helpers/constants";

export const SignUp = () => {
  const router = useRouter();
  const token = getCookie("authtoken");
  if(token) {
    toast("Hola de nuevo!", {
      duration: 1000,
    });
    router.push('/feed')
  }
  const { theme } = useContext(ThemeContext);
  const { data, pending, error, sendData } = usePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    sendData({
      endpoint: `${ENDPOINT}/signup`,
      postData: {
        userName: data.userName,
        email: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    if (data && data.message === "Success") {
      const token = data.token;
      setCookie("authtoken", token);
      router.push("/user");
    }
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
          {data !== undefined && data.message === 'The username is already in use.' && (
            <p className={styles.field_text_input_error}>
            El nombre de usuario ya se encuentra en uso.{" "}
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
            autoComplete="on"
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
            {data !== undefined && data.message === 'The email is already in use.' && (
            <p className={styles.field_text_input_error}>
            El email ya se encuentra en uso.{" "}
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
              pattern: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,18}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{6,18}))/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña no puede estar vacía.
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña debe tener más de 6 caracteres.{" "} <br/>
              Al menos una letra mayúscula, un número y algún caracter especial.
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className={styles.field_text_input_error}>
              {" "}
              La contraseña debe ser menor a 18 <br /> caracteres.{" "}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className={styles.field_text_input_error}>
              Mínimo 6 caracteres. <br/>
              Al menos una letra mayúscula, un número y algún caracter especial.
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
