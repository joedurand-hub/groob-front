import React from "react";
import Input from "../Input/Input";
import { useState } from "react";
import { getCookie } from "cookies-next";
import useAuthPost from "../../hooks/useAuthPost";
import { ENDPOINT, POST_PUBLICATION } from "../../helpers/constants";
import Button from "../Button/Button";
import styles from "./createPost.module.css"

const url = `${ENDPOINT}${POST_PUBLICATION}`;

const CreatePost = () => {
  const token = getCookie("authToken")
  const [values, setValues] = useState("");
  const { data, pending, error, sendData } = useAuthPost();

  const handleInputChange = function (e) {
    const eTargetName = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [eTargetName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    sendData({
      endpoint: url,
      postData: {
        content: values.content,
      },
      token: token,
    });
    e.target.reset()
  };
  
  // const handleClick = () => {
  //   setValues('');
  // };

  return (
    <div className={styles.publication}> 
        <form className={styles.publication_form}  
          onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}>

      <Input
        type="text"
        name={"content"}
        placeholder={"Crea un post"}
        onChange={handleInputChange}
        />
      <Button type="submit" name="Publicar" 
      // onClick={handleClick}
      />
        </form>
        {pending && <p>Loading...</p>}
        {error && <p>Error...</p>}
        <p>{data && data}</p>
    </div>
  );
};

export default CreatePost;
