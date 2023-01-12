import { useEffect, useState } from "react";
import { ENDPOINT } from "../helpers/constants";
import { io } from "socket.io-client";
import useRequest from "./useRequest"

export const useSocket = () => {
  const {data} = useRequest(`${ENDPOINT}/profile-reduced`)
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io(`${ENDPOINT}`);
    setSocket(socket);
    socket.emit("newUser", data?._id)
    return () => socket.disconnect();
  }, [ENDPOINT]);

  const sendSocket = (event, payload) => {
    if (socket) {
      socket.emit(event, payload);
    }
  };

  return { sendSocket }
};
