import { useEffect } from 'react';

export const useWebNotifications = (title, options) => {
  useEffect(() => {
    if (!('Notification' in window)) {
      console.log('Este navegador no soporta notificaciones web');
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
