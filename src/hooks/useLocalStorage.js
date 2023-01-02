import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [value]);

  return [value, setValue];
}

// import { useLocalStorage } from './useLocalStorage';

// function MyComponent() {
//   const [count, setCount] = useLocalStorage('count', 0);

//   return (
//     <div>
//       <p>Has clickeado {count} veces</p>
//       <button onClick={() => setCount(count + 1)}>Aumentar contador</button>
//     </div>
//   );
// }