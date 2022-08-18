import {useState} from "react";
import io from "socket.io-client"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card";
import { useCard } from "../hooks/useCard";

const socket = io('http://localhost:8080')

const Streamings = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("message", message)
  }
  return (
    <Layout>
      <br/>
      <br/>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export default Streamings;
