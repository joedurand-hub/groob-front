import { useEffect } from 'react';

export const usePushNotifications = (title, options) => {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.error('Este navegador no soporta notificaciones web');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        }
      });
    }
  }, [title, options]);
}




// import { useEffect } from "react"
// import { getCookie } from "cookies-next";
// import { usePushNotifications } from '../../hooks/usePushNotifications';
// import { useRouter } from "next/router";

// const Index = () => {
//   const router = useRouter()
//   const token = getCookie("authtoken")
  
//   useEffect(() => {
//     if (!token) {
//       router.push("/login")
//     }
//   }, [])

//   usePushNotifications('Nueva notificación', {
//     body: 'Hola, probando noti jeje',
//   });
//   return (
//     <div>
//       Notificaciones habilitadas

//     </div>
//   )
// }

// export default Index