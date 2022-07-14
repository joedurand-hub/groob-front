import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ActiveCardProvider } from "../contexts/ActiveCardContext"


function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider>
          <ActiveCardProvider>
            <Component {...pageProps} />
          </ActiveCardProvider>
        </ThemeProvider>
  );
}
export default MyApp;
