import { createMuiTheme } from "@material-ui/core";

const mode = "dark";

export default createMuiTheme({
  palette: {
    type: mode,
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3ea6fd",
    },
    background: {
      default: mode === "dark" ? "#181818" : "#fff",
      paper: mode === "dark" ? "#212020" : "#fff",
    },
  },
});
