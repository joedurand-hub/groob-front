import styles from "./createPost.module.css";
import Textarea from "../Textarea/Textarea";
import { useState, useContext } from "react";
import { getCookie } from "cookies-next";
import useAuthPost from "../../hooks/useAuthPost";
import { ENDPOINT, POST_PUBLICATION } from "../../helpers/constants";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { BsFillImageFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

const CreatePost = () => {
  const { theme } = useContext(ThemeContext);
  const token = getCookie("authToken");
  const [values, setValues] = useState("");
  const [lengthValue, setLengthValue] = useState(0);
  const { data, pending, error, sendData } = useAuthPost();

  const handleInputChange = function (e) {
    const eTargetName = e.target.name;
    const value = e.target.value;
    setLengthValue(value.length);
    setValues({ ...values, [eTargetName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData({
      endpoint: `${ENDPOINT}${POST_PUBLICATION}`,
      postData: {
        content: values.content,
      },
      token: token,
    });
    e.target.reset();
  };

  return (
    <>
      <form
        className={
          theme
            ? `${styles.container_create_post} ${styles.light_mode}`
            : `${styles.container_create_post} ${styles.dark_mode}`
        }
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Textarea
          placeholder="Crea un post"
          onChange={handleInputChange}
          maxLength={500}
        />
        <div className={styles.container_form_buttons}>
          <Icon>
            <BsFillImageFill />
          </Icon>
          <div className={styles.container_send_post}>
            <p className={styles.character_counter}>{lengthValue}/500</p>
            <Button
              type="submit"
              name="Publicar"
              variant={
                lengthValue > 500 || lengthValue === 0 ? "disabled" : "primary"
              }
            />
          </div>
        </div>
      </form>
      {pending && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <p>{data && data}</p>
    </>
  );
};

export default CreatePost;
