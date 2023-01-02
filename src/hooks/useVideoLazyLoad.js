import { useRef, useEffect } from 'react';

export const useVideoLazyLoad = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const video = ref.current;
        video.src = video.dataset.src;
        video.load();
        observer.unobserve(video);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

// import { useVideoLazyLoad } from './useVideoLazyLoad';

// function MyComponent() {
//   const ref = useVideoLazyLoad();

//   return (
//     <video
//       ref={ref}
//       data-src="/path/to/video.mp4"
//       poster="/path/to/poster.jpg"
//       controls
//     >
//       Tu navegador no soporta la etiqueta de vídeo.
//     </video>
//   );
// }