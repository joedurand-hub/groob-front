import { useRef, useState, useEffect } from 'react';

export const useOnScreen = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, visible];
}

// import { useOnScreen } from './useOnScreen';

// function MyComponent() {
//   const [ref, visible] = useOnScreen({ rootMargin: '0px' });

//   return (
//     <div ref={ref}>
//       {visible ? 'Element is visible' : 'Element is not visible'}
//     </div>
//   );
// }