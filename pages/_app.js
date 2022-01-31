import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQueryClientAndsettings } from "@constants/queryClient";

function MyApp({ Component, pageProps, router }) {
  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
