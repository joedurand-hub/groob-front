import { useRef, useCallback } from 'react';

export const useClipboard = () => {
  const ref = useRef();

  const copy = useCallback(() => {
    if (ref.current) {
      ref.current.select();
      document.execCommand('copy');
      ref.current.blur();
    }
  }, []);

  const paste = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
      document.execCommand('paste');
      ref.current.blur();
    }
  }, []);

  return { ref, copy, paste };
}

// import { useClipboard } from './useClipboard';

// function MyComponent() {
//   const { ref, copy, paste } = useClipboard();

//   return (
//     <div>
//       <textarea ref={ref} />
//       <button onClick={copy}>Copiar</button>
//       <button onClick={paste}>Pegar</button>
//     </div>
//   );
// }