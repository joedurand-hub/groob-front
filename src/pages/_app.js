import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ActiveCardProvider } from "../contexts/ActiveCardContext"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider>
          <ActiveCardProvider>
            <Component {...pageProps} />
          </ActiveCardProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
