import { useEffect, createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ url, children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io(url);
    setSocket(socket);
    return () => socket.disconnect();
  }, [url]);

  const sendSocket = (event, payload) => {
    if (socket) {
      socket.emit(event, payload);
    }
  };

  return (
    <SocketContext.Provider value={{ sendSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);