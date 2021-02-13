import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

// Dark theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      white: "#ffffff",
      black: "#000000"
    },
    primary: {
      main: purple[200],
      contrastText: grey[300]
    },
    secondary: {
      main: teal[200],
      contrastText: grey[300]
    },
    text: {
      primary: grey[300],
      secondary: grey[500]
    },
    neutral: {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    }
  }
});

export default theme;
