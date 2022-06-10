import React from "react";
import usePost from "../../hooks/usePost";
import { useState } from "react";

let url = "http://localhost:8080/login";
let token;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, pending, error, sendData } = usePost();
  
  const handleLogin = (e) => {
    e.preventDefault();
    sendData({
      endpoint: url, 
      postData: {
        email,
        password,
      } 
    });
    console.log("data", data);
    token = window.localStorage.setItem("token", JSON.stringify(data));
    return token;
  };

  const handleInputEmailChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };

  const handleInputPasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };

  return (
    <div>
      {pending && (
        <div>
          <p>pending...</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )}
      <form onSubmit={handleLogin}>
        <input
          placeeholder="email"
          type="email"
          name="email"
          onChange={(e) => handleInputEmailChange(e)}
        />
        <input
          placeeholder="password"
          name="password"
          type="password"
          onChange={(e) => handleInputPasswordChange(e)}
        />
        <button
          type="submit"
          value={pending ? "Loading" : "Login"}
          disabled={pending}
        >
          Login
        </button>
      </form>
      {/* <Button name="Dale amigoo" variant="primary" />
      <h1>h1: Lorem ipsum dolor sit amet.</h1>
      <h2>h2: Lorem ipsum dolor sit amet.</h2>
      <h3>h3: Lorem ipsum dolor sit amet.</h3>
      <h4>h4: Lorem ipsum dolor sit amet.</h4>
      <h5>h5: Lorem ipsum dolor sit amet.</h5>
      <h6>h6: Lorem ipsum dolor sit amet.</h6>
      <p>p: Lorem ipsum dolor sit amet.</p>
      <a href="">a: Lorem ipsum dolor sit amet.</a>

      <div></div>
      <button>Active DarkMode</button> */}
    </div>
  );
};

export default SignIn;
