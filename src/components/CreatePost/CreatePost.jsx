import React from "react";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const { handleSubmit, onChange } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

      CreatePost
      <input
        type="text"
        name={"Contenido"}
        placeholder={"Crea un post"}
        onChange={onChange}
        />
      <button type="submit">Publicar</button>
        </form>
    </div>
  );
};

export default CreatePost;
