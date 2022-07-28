import axios from "axios";
import { Formik, Field } from "formik";
import { useState } from "react";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
// import UploadImage from "../UploadImage/UploadImage";
import style from "./FormularioDeProducto.module.css";
// import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';

function FormularioDeProducto() {
  const [productEnviado, setProductEnviado] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // const convertiraBase64 = (archivos) => {
  //   Array.from(archivos).forEach((archivo) => {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(archivo);
  //     reader.onload = function () {
  //       // let arrayAuxiliar = [];
  //       let base64 = reader.result;
  //       setImage(base64);

  //       // NOTA
  //       // Lo que esta comentado abajo de arrayAuxiliar, elimina la primera parte del string que nos da si hacemos console.log(base64)
  //       // Si no hacemos el split nos va a traer la imagen de esta forma: data:image/jpeg;base64,/9j/4---> y un string re largo.
  //       // Segun lo que vi, para recuperar la imagen en formato base64 desde un <img/>, la tenemos que llamar sin el data:image/jpeg;base64 (sin la primera partecita antes de la coma)
  //       // El data:image/jpeg;base64 sirve para que la imagen se vea.
  //       // Es decir, tenemos que enviar la imagen al back sin esa primera parte
  //       // y cuando la queremos llamar en el garage, le agregamos al principio como estaba antes el data:image/jpeg;base64 para que se vea.
  //       // Para unir los dos array separados por el split lo hacemos con un join

  //       // arrayAuxiliar = base64.split(",");
  //       // console.log(arrayAuxiliar[1]);
  //       // setImage(arrayAuxiliar[1]);
  //     };
  //   });
  // };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxqxsbe5n/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    // console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          product: "",
          marca: "",
          estilo: "",
          uso: "",
          price: "",
          description: "",
        }}
        validate={(valores) => {
          let errores = {};
          // Validamos el nombre del producto
          if (!valores.product) {
            errores.product = "Por favor, escriba el nombre del producto";
          } else if (valores.product.length >= 20) {
            errores.product =
              "El nombre del producto no puede contener más de 20 dígitos";
          }
          // Validamos el precio
          if (!valores.price) {
            errores.price = "Por favor introduzca un precio";
          } else if (valores.price.length >= 10) {
            errores.price = "El precio no puede ser tan elevado";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log({ ...valores, image });
          //console.log("El choclo que da base64:",image);
          setProductEnviado(true);
          axios.post("http://localhost:3001/products", {
            ...valores,
            image: image,
          });
          setTimeout(() => {
            setProductEnviado(false);
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit} id="formulario">
            {/* <FormGroup>
              <Input
                type="file"
                id="img"
                name="img"
                multiple
                onChange={(e) => convertiraBase64(e.target.files)}
              />

              <img src={image} style={{ width: "300px" }} />
            </FormGroup> */}
            <FormGroup>
              <Input
                type="file"
                name="file"
                placeholder="Sube tu imágen aquí"
                onChange={uploadImage}
              />
              {loading ? (
                <h3>Cargando imágen...</h3>
              ) : (
                <img src={image} style={{ width: "300px" }} />
              )}
            </FormGroup>

            <FormGroup>
              <Label for="product">Producto</Label>
              <Input
                id="product"
                name="product"
                placeholder="Producto"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.product}
              />
              {touched.product && errors.product && (
                <div className={style.errors}>{errors.product}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="marca">Marca</Label>
              <Input
                id="marca"
                name="marca"
                placeholder="Marca"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.marca}
              />
            </FormGroup>

            <FormGroup>
              <Label for="estilo">Estilo (requerido)</Label>
              <Input
                id="estilo"
                name="estilo"
                value={values.estilo}
                onChange={handleChange}
                type="select"
              >
                <option hidden>-</option>
                <option value="Minimalista">Minimalista</option>
                <option value="Tecnológico">Tecnológico</option>
                <option value="Artístico">Artístico</option>
                <option value="Rockero">Rockero</option>
                <option value="Vintage">Vintage</option>
                <option value="Rústico">Rústico</option>
                <option value="Bohemio">Bohemio</option>
                <option value="Creativo">Creativo</option>
                <option value="Romántico">Romántico</option>
                <option value="Otro">Otro</option>
              </Input>
            </FormGroup>

            <FormGroup className={style.radios} id="my-radio-group">
              <div>Tiempo de uso</div>

              <Label check>
                <Field type="radio" name="uso" value="Usado una vez" />
                Usado una vez
              </Label>
              <Label check>
                <Field type="radio" name="uso" value="Usado un par de veces" />
                Usado un par de veces
              </Label>
              <Label check>
                <Field type="radio" name="uso" value="Usado un año o más" />
                Usado un año o más
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="price">Precio</Label>
              <Input
                id="price"
                name="price"
                placeholder="$"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
              />
              {touched.price && errors.price && (
                <div className={style.errors}>{errors.price}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="description">
                Descripción (no olvide agregar el talle con referencia del país)
              </Label>
              <Input
                id="description"
                name="description"
                type="textarea"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
              />
            </FormGroup>
            <Button type="submit">Enviar</Button>
            {productEnviado && <p>Producto creado con éxito</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormularioDeProducto;
