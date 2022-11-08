import styles from "./putProfile.module.css";
import { useContext } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../Loader/Loader";

const PutProfile = ({ state, onChange, value, onSubmit, pending, error }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container} ${styles.light_mode}`
          : `${styles.container} ${styles.dark_mode}`
      }
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
          event.target.reset();
        }}
      >
        <Input
          label={"Nombre de usuario"}
          name={"userName"}
          type="text"
          state={state?.userName}
          placeholder={"Nombre de usuario"}
          onChange={onChange}
          value={value?.userName}
        />
        <Input
          label={"Descripción"}
          name={"description"}
          type="text"
          state={state?.description}
          placeholder={"Descripción"}
          onChange={onChange}
          value={value?.description}
        />
        <Input
          label={"Email"}
          name={"email"}
          type="email"
          placeholder={"Email"}
          onChange={onChange}
          value={value?.email}
        />
        {/* <Input
          label={"Edad"}
          name={"age"}
          type="date"
          placeholder={"Edad"}
          onChange={onChange}
          // value={state?.age}
        /> */}
                <Input
          label={"Teléfono"}
          name={"phone"}
          type="text"
          placeholder={"Teléfono"}
          onChange={onChange}
          value={value?.phone}
        />
        <Input
          label={"Nombre"}
          name={"firstName"}
          type="text"
          placeholder={"Nombre"}
          onChange={onChange}
          value={state?.firstName}
        />
        <Input
          label={"Apellido"}
          name={"lastName"}
          type="text"
          placeholder={"Apellido"}
          onChange={onChange}
          value={state?.lastName}
        />
        {pending ? (
          <div className={styles.loading}>
            <Loader />
          </div>
        ) : (
          <div className={styles.container_button}>
            <>
              <Button
                name={"Cancelar"}
                variant="cancel"
                type="text"
                onClick={() => router.push("/user")}
              />
              <Button name={"Actualizar"} onSubmit={onSubmit} />
            </>
          </div>
        )}
      </form>
    </div>
  );
};

export default PutProfile;
