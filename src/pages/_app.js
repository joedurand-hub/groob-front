import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <button onClick={toggleTheme}>Switch Theme</button>
    </ThemeProvider>
  );
}
export default MyApp;
