import { createTheme } from "@mui/material/styles";
import { green, yellow, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    success: {
      main: green[700],
      light: green[400],
      dark: green[800],
    },
    custom: {
      main: yellow[700],
      light: yellow[400],
      dark: yellow[800],
    },
    accent: {
      main: pink[700],
      light: pink[400],
      dark: pink[800],
    },
  },
});

export default theme;
