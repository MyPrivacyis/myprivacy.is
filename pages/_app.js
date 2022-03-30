import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import * as Fathom from "fathom-client";
import { DefaultSeo } from "next-seo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import SEO from "../next-seo.config";

//Components
import Header from "../components/header/header";

//Themes
const lightTheme = {
  body: "#ffffff",
  titleColor: "#141414",
  bodyText: "#676767",
  panel: "#fafafa",
  panelHover: "#F0F0F0",
  border: "#14141406",
  toggle: "#7868D5",
  tag: "#14141412",

  colors: {
    red: "#EC506E",
  },
};

const darkTheme = {
  body: "#000000",
  titleColor: "#ffffff",
  bodyText: "#B1B1B1",
  panel: "#141414",
  panelHover: "#222222",
  border: "#ffffff06",
  toggle: "#F5A623",
  tag: "#ffffff12",

  colors: {
    red: "#EC506E",
  },
};

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url(/fonts/Inter-SemiBold.ttf);
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Inter-Regular.ttf);
  font-display: swap;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.titleColor};
    font-family: 'Inter', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  //Page loader
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("MWKZHZVB", {
      includedDomains: ["resource.wtf"],
      url: "https://eight-distinct.resource.wtf/script.js",
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const themeToggler = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-SemiBold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/meta/safari-pinned-tab.svg"
          color="#141414"
        />
        <meta name="robots" content="follow, index" />
      </Head>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header themeToggler={themeToggler} isDarkTheme={isDarkTheme} />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} themeToggler={themeToggler} />
      </ThemeProvider>
    </>
  );
}
