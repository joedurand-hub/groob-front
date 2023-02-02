import { useEffect } from 'react';

export const useServiceWorker = (src) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(src)
        .then((registration) => {
          console.log('El servicio worker se ha registrado correctamente:', registration);
        })
        .catch((error) => {
          console.error('Error al registrar el servicio worker:', error);
        });
    }
  }, [src]);
}

// import { useServiceWorker } from './useServiceWorker';

// function MyComponent() {
//   useServiceWorker('/path/to/service-worker.js');

//   return <div>Mi aplicación</div>;
// }