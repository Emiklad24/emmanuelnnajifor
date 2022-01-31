import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQueryClientAndsettings } from "@constants/queryClient";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function MyApp({ Component, pageProps, router }) {
  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
                pageExit: {
                  opacity: 0,
                },
              }}
              exit="pageExit"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
