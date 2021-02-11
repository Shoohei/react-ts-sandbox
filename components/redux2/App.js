import React, { useState } from "react";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Switch from "@material-ui/core/Switch";

import { CssBaseline } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import Reset from "@material-ui/core/CssBaseline";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const [paletteTypeState, setPaletteTypeState] = useState(false);
  const paletteType = paletteTypeState ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      type: paletteType
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
