import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ENDPOINT } from '../helpers/constants';

export const useNotifications = () => {
    const [notifications, setNotifications] = useState("");
    useEffect(() => {
        const socket = io(`${ENDPOINT}`);
        // Escuchamos los eventos de notificación enviados por el servidor
        socket.on('newFollow', (event) => {
            console.log(event)
            setNotifications(event);
        });

        socket.on('newMessage', (event) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'new message', event },
            ]);
        });

        socket.on('postCommented', (event) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'commented on my post', event },
            ]);
        });

        socket.on('postLiked', (event) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'liked my post', event },
            ]);
        });

        socket.on('profileVisited', (event) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { type: 'visited my profile', event },
            ]);
        });

        // Devolvemos la función que se encargará de desconectar el socket al desmontar el componente
        return () => socket.disconnect();
    }, []);

    return { notifications} ;
}




// import useNotifications from './useNotifications';

// function MyComponent() {
//   const notifications = useNotifications();

//   return (
//     <div>
//       {notifications.map((notification) => (
//         <p key={notification.type}>{notification.type}: {notification.event}</p>
//       ))}
//     </div>
//   );
// }