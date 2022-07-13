import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ActiveCardProvider } from "../contexts/ActiveCardContext"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ActiveCardProvider>
            <Component {...pageProps} />
          </ActiveCardProvider>
        </ThemeProvider>
      </QueryClientProvider>
  );
}
export default MyApp;
