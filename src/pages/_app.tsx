import { Chakra } from "../components/Chakra";
import Fonts from "../components/Fonts";
import Main from "../components/layouts/Main";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </Chakra>
  );
}

export default MyApp;
