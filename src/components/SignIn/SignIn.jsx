import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import logo from "../../../public/Logo.png";
import usePost from "../../hooks/usePost";
import Button from "../Button/Button";
import Anchor from "../Anchor/Anchor";
import styles from "./signin.module.css";
import inputField from "../Input/input.module.css";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { ENDPOINT } from "../../helpers/constants";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "cookies-next";

export const SignIn = () => {
  const URL = `${ENDPOINT}/login`;
  const [handlePassword, setHandlePassword] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { data, pending, error, sendData } = usePost();
  const router = useRouter();
  const token = getCookie("authtoken");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.text.includes("@")) {
      sendData({
        endpoint: URL,
        postData: {
          email: data.text,
          password: data.password,
        },
      });
    } else {
      sendData({
        endpoint: URL,
        postData: {
          userName: data.text,
          password: data.password,
        },
      });
    }
  };

  const handleNewPassword = () => {
    setHandlePassword(!handlePassword);
  };

  useEffect(() => {
    if (data && data.message === "Success") {
      const token = data.token;
      setCookie("authtoken", token);
      router.push("/feed");
    }
    if (token) {
      toast("Hola de nuevo!", {
        duration: 1200,
      });
      router.push("/feed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div
      className={
        theme
          ? `${styles.container_form}  ${styles.light_mode}`
          : `${styles.container_form}  ${styles.dark_mode}`
      }
    >
      <div className={styles.container_logo}>
        <Image src={logo} width={100} height={75} alt="Image" />
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
              ? `${inputField.field} ${styles.light_mode}`
              : `${inputField.field} ${styles.dark_mode}`
          }
        >
          <input
            placeholder="Email o nombre de usuario"
            autoComplete="off"
            className={
              theme
                ? `${inputField.field_input} ${inputField.field_input_light}`
                : `${inputField.field_input} ${inputField.field_input_dark}`
            }
            type="text"
            {...register("text", {
              required: true,
            })}
          />
          {errors.text?.type === "required" && (
            <p className={styles.form_text_input_error}>
              El campo no puede estar vacío
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
              required: true,
              pattern:
                /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9 \S]{8,32}$/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className={styles.form_text_input_error}>
              {" "}
              La contaseña no puede estar vacía
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className={styles.form_text_input_error}>
              {" "}
              Email o contraseña incorrectos
            </p>
          )}
        </div>

        <div className={styles.container_submit}>
          <Button type="submit" name="Iniciar sesión" variant="login" />
        </div>
        <br />
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
          toast.success("Inicio de sesión exitoso.", {
            position: "bottom-center",
            autoClose: "3000",
          })}
        <Toaster />
      </form>
      <div className={styles.container_reset_password}>
        <button className={styles.button_reset_password} onClick={handleNewPassword}>¿Olvidaste tu contraseña?</button>
        {handlePassword && (
        <form>
          <input type="text" placeholder="Escriba su email" />
          <button >Enviar</button>
        </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
