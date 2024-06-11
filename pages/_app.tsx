import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../scss/MaterialTheme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}