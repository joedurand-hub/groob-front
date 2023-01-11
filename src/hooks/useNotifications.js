import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ENDPOINT } from '../helpers/constants';

export const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const socket = io(`${ENDPOINT}`);

        // Escuchamos los eventos de notificación enviados por el servidor
        socket.on('new follower', (user) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'new follower', user },
            ]);
        });

        socket.on('new message', (user) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'new message', user },
            ]);
        });

        socket.on('commented on my post', (user) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'commented on my post', user },
            ]);
        });

        socket.on('liked my post', (user) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'liked my post', user },
            ]);
        });
        
        socket.on('visited my profile', (user) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'visited my profile', user },
            ]);
        });

        // Devolvemos la función que se encargará de desconectar el socket al desmontar el componente
        return () => socket.disconnect();
    }, []);

    return notifications;
}




// import useNotifications from './useNotifications';

// function MyComponent() {
//   const notifications = useNotifications();

//   return (
//     <div>
//       {notifications.map((notification) => (
//         <p key={notification.type}>{notification.type}: {notification.user}</p>
//       ))}
//     </div>
//   );
// }