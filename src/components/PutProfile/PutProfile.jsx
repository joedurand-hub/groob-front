import styles from "./putProfile.module.css";
import { useContext } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../Loader/Loader"


const PutProfile = ({ state, onChange, onSubmit, pending, error }) => {

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme
          ? `${styles.container} ${styles.light_mode}`
          : `${styles.container} ${styles.dark_mode}`
      }
    >
      <form onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
        event.target.reset()
      }}>
        <Input
          label={"Nombre de usuario"}
          name={"userName"}
          type="text"
          placeholder={"Nombre de usuario"}
          variant="field_update_input"
          onChange={onChange}
          value={state?.userName}
        />
        <Input
          label={"Descripción"}
          name={"description"}
          type="text"
          placeholder={"Descripción"}
          variant="field_update_input"
          onChange={onChange}
          value={state?.description}

        />
        <Input
          label={"Email"}
          name={"email"}
          type="email"
          placeholder={"Email"}
          variant="field_update_input"
          onChange={onChange}
          value={state?.email}

        />
        <Input
          label={"Edad"}
          name={"age"}
          type="date"
          placeholder={"Edad"}
          variant="field_update_input"
          onChange={onChange}
          // value={state?.age}
        />
        <Input
          label={"Nombre"}
          name={"firstName"}
          type="text"
          placeholder={"Nombre"}
          variant="field_update_input"
          onChange={onChange}
          value={state?.firstName}

        />
        <Input
          label={"Apellido"}
          name={"lastName"}
          type="text"
          placeholder={"Apellido"}
          variant="field_update_input"
          onChange={onChange}
          value={state?.lastName}

        />
        <div className={styles.container_button}>
          {pending ? (
            <>
            <Loader/>
            </>
          ) : (
            <>
          <Button name={"Cancelar"} variant="cancel" onClick={() => router.push('/user')}/>
          <Button name={"Actualizar"} onSubmit={onSubmit}/>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default PutProfile;
