import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import MainProvider from "./mainContext";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F6EAED",
      main: "#C60029",
    },
    secondary: {
      light: "#F9F9F9",
      main: "#333333",
      footer: "#EEEEEE",
      dark: "#000000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainProvider>
        <App />
      </MainProvider>
    </ThemeProvider>
  </React.StrictMode>
);
