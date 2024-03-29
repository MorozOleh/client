import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CssBaseline } from "@mui/material";
// import { StylesProvider } from '@mui/styles';
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import theme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
