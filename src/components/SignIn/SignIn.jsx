import React from "react";
import axios from 'axios'
import Button from "../Button/Button";
import { useState } from 'react'


const SignIn = () => {
  let token;
  const handleLogin = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('http://localhost:8080/login', {
      email: "alexis@gmail.com",
      password: "qwerty.123"
    })
    token = window.localStorage.setItem("token", JSON.stringify(data))
    console.log(data)
    return token
  }


  return (
    <div>
      <Button name="Dale amigoo" variant="primary" />
      <h1>h1: Lorem ipsum dolor sit amet.</h1>
      <h2>h2: Lorem ipsum dolor sit amet.</h2>
      <h3>h3: Lorem ipsum dolor sit amet.</h3>
      <h4>h4: Lorem ipsum dolor sit amet.</h4>
      <h5>h5: Lorem ipsum dolor sit amet.</h5>
      <h6>h6: Lorem ipsum dolor sit amet.</h6>
      <p>p: Lorem ipsum dolor sit amet.</p>
      <a href="">a: Lorem ipsum dolor sit amet.</a>

      <div>
      <input placeeholder="email" type="email"/>
      <input placeeholder="contraseña" type="password" />
      <form onSubmit={handleLogin}>
          
          <button type="submit">Login</button>
        </form>
      </div>
      <button >Active DarkMode</button>

    </div>
  );
};

export default SignIn;
