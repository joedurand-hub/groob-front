import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

// import { useRouter } from "next/router"
// import { useState, useEffect, useContext } from "react"

// function Loading() {
//   const { theme } = useContext(ThemeContext)
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//       const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//       const handleComplete = () => setLoading(false);

//       router.events.on('routeChangeStart', handleStart)
//       router.events.on('routeChangeComplete', handleComplete)
//       router.events.on('routeChangeError',  handleComplete)

//       return () => {
//           router.events.off('routeChangeStart', handleStart)
//           router.events.off('routeChangeComplete', handleComplete)
//           router.events.off('routeChangeError', handleComplete)
//       }
//   })
  
//   return loading && (
//   <div className={theme ? `container_loader_light` : `container_loader_dark`}>
//     <div className='loader'>
//     </div>
//   </div>
//   )
// }

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
          {/* <Loading/> */}
          <Component {...pageProps} />
       </ThemeProvider>
  );
}
export default MyApp;
