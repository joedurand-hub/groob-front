import React from "react";
import usePost from "../../hooks/usePost";
import { useState } from "react";
import styles from "./signin.module.css";

let url = "http://localhost:8080/login";
let token;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, pending, error, sendData } = usePost();
  
  const handleLogin = (e) => {
     e.preventDefault();
     sendData({ endpoint: url, postData: { email, password }})
    token = window.localStorage.setItem("token", JSON.stringify(data));
    return token;
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
      <form className={styles.form} onSubmit={handleLogin}>
        <input
          placeeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          value={pending ? "Loading" : "Login"}
          disabled={pending}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
