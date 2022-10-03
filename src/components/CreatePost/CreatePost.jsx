import styles from "./createPost.module.css";
import Textarea from "../Textarea/Textarea";
import { getCookie } from "cookies-next";
import { useState, useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ENDPOINT, POST_PUBLICATION } from "../../helpers/constants";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useRouter } from "next/router";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillImageFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../Loader/Loader";
import usePostPublication from "../../hooks/usePostPublication";

const CreatePost = ({ closeModal }) => {
  const token = getCookie("authtoken");
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const url = `${ENDPOINT}${POST_PUBLICATION}`;

  const [values, setValues] = useState("");
  const [lengthValue, setLengthValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [files, setFiles] = useState(0);
  const [explicitContent, setExplicitContent] = useState(false);
  const [uploadData, setUploadData] = useState({});
  const { data, pending, error, sendPublication } = usePostPublication();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLengthValue(value.length);
    setValues(value);
  };

  const handleExplicitContent = (e) => {
    const value = e.target.checked;
    setExplicitContent(value);
  };

  const handleInputPriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleFilesLoad = (e) => {
    setFiles(e);
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
    const body = new FormData();
    for (let index = 0; index < files.length; index++) {
      body.append("images", files[index]);
    }
    body.append("content", values);
    body.append("price", price);
    body.append("explicitContent", explicitContent);
    sendPublication({
      endpoint: url,
      postData: body,
      token: token,
    });
    e.target.reset();
    setLengthValue(0);
  };

  useEffect(() => {
    if (data && data?.success === true) {
      const reload = setTimeout(
        () => router.push(`/feed/${data.publicationSaved._id}`),
        500
      );
      return () => clearTimeout(reload);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
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
        <div
          className={
            theme
              ? `${styles.closeModal} light_mode`
              : `${styles.closeModal} dark_mode`
          }
        >
          <i
            className={
              theme
                ? `${styles.button_closeModal} light_mode`
                : `${styles.button_closeModal} dark_mode`
            }
            onClick={closeModal}
          >
            <IoIosCloseCircle />
          </i>
        </div>
        <Textarea
          placeholder="Crea una publicación o haz una venta"
          onChange={handleInputChange}
          maxLength={500}
        />
        {files.length > 0 && (
          <div className={styles.container_price_and_nsfw}>
            <div className={styles.container_price}>
              <span className={styles.price_title}>Precio</span>
              <span className={styles.price_title_optional}>
                {"("}opcional{")"}
              </span>
              <input
                className={
                  theme
                    ? `${styles.price_input} ${styles.price_light}`
                    : `${styles.price_input} ${styles.price_dark}`
                }
                placeholder="1000"
                type="number"
                onChange={handleInputPriceChange}
              />
            </div>
          </div>
        )}
        <div className={styles.container_form_buttons}>
          <div className={styles.upload_files}>
            <label htmlFor="upload">
              <Icon>
                <BsFillImageFill />
              </Icon>
            </label>
            <p className={styles.files_length}>
              {files.length > 0 ?  `${files.length}/7` : null}
            </p>
          </div>
          <input
            type="file"
            id="upload"
            accept="image/*"
            multiple
            className={styles.input_upload}
            onChange={(e) => handleFilesLoad(e.target.files)}
          />
          <div className={styles.container_nsfw}>
            <input
              type="checkbox"
              id="nsfw"
              value={explicitContent}
              onChange={handleExplicitContent}
            />
            <label htmlFor="nsfw">
              <strong>¿NSFW?</strong>
            </label>
          </div>
          <div className={styles.container_send_post}>
            <p className={styles.character_counter}>{lengthValue}/500</p>
            {pending ? (
              <Loader />
            ) : (
              <Button
                type="submit"
                name="Publicar"
                variant={
                  lengthValue > 0 || files.length > 0 ? "primary" : "disabled"
                }
              />
            )}
          </div>
        </div>
      </form>
      <br />
      {error &&
        toast.error("¡Ups! Ha ocurrido un error.", {
          position: "top-center",
          autoClose: "3000",
        })}
      {data &&
        data?.success === true &&
        toast.success("¡Post creado!", {
          position: "top-center",
          autoClose: "5000",
        })}
      <Toaster />
    </>
  );
};

export default CreatePost;
