import React, { useState } from "react";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Switch from "@material-ui/core/Switch";

import { CssBaseline } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import teal from "@material-ui/core/colors/teal";
import Reset from "@material-ui/core/CssBaseline";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const [paletteTypeState, setPaletteTypeState] = useState(false);
  const paletteType = paletteTypeState ? "dark" : "light";
  const primaryMain = paletteTypeState ? purple[200] : purple[500];
  const secondaryMain = paletteTypeState ? teal[200] : teal[500];
  const theme = createMuiTheme({
    palette: {
      type: paletteType,
      primary: {
        main: purple[500]
      },
      secondary: {
        main: teal[500]
      }
    }
  });
  const handleThemeChange = () => {
    setPaletteTypeState(!paletteTypeState);
  };

  console.log("App.js");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={paletteTypeState} onChange={handleThemeChange} />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
