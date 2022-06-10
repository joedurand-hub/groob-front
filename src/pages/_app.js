import { useState } from "react"
import { GlobalStyles } from "../styles/global" 

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  ) 
}
export default MyApp