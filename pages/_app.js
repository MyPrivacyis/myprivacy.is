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
  bodyText: "#14141482",
  panel: "#fafafa",
  panelHover: "#14141412",
  border: "#14141406",
  toggle: "#7868D5",
  tag: "#14141412",
  navigator: "rgba(255, 255, 255, 0.82)",
  navigatorBorder: "#14141412",
  shadow: "rgb(255, 255, 255, 1)",

  colors: {
    red: "#EC506E",
  },
};

const darkTheme = {
  body: "#000000",
  titleColor: "#ffffff",
  bodyText: "#ffffff82",
  panel: "#141414",
  panelHover: "#ffffff18",
  border: "#ffffff06",
  toggle: "#F5A623",
  tag: "#ffffff12",
  navigator: "rgba(20, 20, 20, 0.82)",
  navigatorBorder: "#ffffff12",
  shadow: "rgb(0, 0, 0, 1)",

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

  ::selection {
    background-color: #55ACEE12;
    color: #55ACEE;
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
    Fathom.load("ALSMHWAO", {
      includedDomains: ["myprivacy.is"],
      url: "https://moth.myprivacy.is/script.js",
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
        <link rel="icon" type="image/svg+xml" href="/img/meta/favicon.svg" />
        <link rel="icon" type="image/png" href="/img/meta/favicon.png" />
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
