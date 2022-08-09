import styles from "./createPost.module.css";
import Textarea from "../Textarea/Textarea";
import { useState, useContext } from "react";
import { getCookie } from "cookies-next";
import { ENDPOINT, POST_PUBLICATION } from "../../helpers/constants";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { BsFillImageFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../Loader/Loader"
import usePostPublication from "../../hooks/usePostPublication";

const CreatePost = () => {
  const { theme } = useContext(ThemeContext);
  const token = getCookie("authToken");

  const url = `${ENDPOINT}${POST_PUBLICATION}`
  
  const [values, setValues] = useState("");
  const [lengthValue, setLengthValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [files, setFiles] = useState({})
  const [uploadData, setUploadData] = useState({})
  const { data, pending, error, sendPublication } = usePostPublication();
  
  const handleInputChange = function (e) {
    const value = e.target.value;
    setLengthValue(value.length);
    setValues(value);
  };

  const handleInputPriceChange = function (e) {
    const value = e.target.value;
    setPrice(value);
  };

  const handleFilesLoad = (e) => {
    setFiles(e)
    // const file = e.target.files[0]
    // const reader = new FileReader();
    // reader.onload = function(onLoadEvent) {
    //   setImageSrc(onLoadEvent.target.result)
    //   setUploadData(undefined)
    // }
    // reader.readAsDataURL(changeEvent.target.files[0])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = new FormData()
    
    for (let index = 0; index < files.length; index++) {
      body.append('images', files[index])
    }
  
    body.append('content', values)
    body.append('price', price)
      sendPublication({
      endpoint: url,
      postData: body,
      token: token,
    });
    e.target.reset();
    setLengthValue(0);
  };
  console.log(data)
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
          placeholder="Crea una publicación o haz una venta"
          onChange={handleInputChange}
          maxLength={500}
        />
        <input placeholder="Precio" type="number" onChange={handleInputPriceChange} min={1}/>
        <div className={styles.container_form_buttons}>
          <label htmlFor="upload">
          <Icon>
            <BsFillImageFill />
          </Icon>
          {/* <Image src={imageSrc && imageSrc} width={40} height={40} alt="Icon by upload images"/> */}
          </label>
          <input type="file" id="upload" accept="image/*" multiple className={styles.input_upload} onChange={(e) => handleFilesLoad(e.target.files)}/>
        
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
      <br/>
      {pending && <Loader/>}
      {error && <p>Ups... ¡Hubo un error!</p>}
      {data && <p>Publicación exitosa!</p>}
    </>
  );
};

export default CreatePost;
