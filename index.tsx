import React, { Component } from "react";
import { render } from "react-dom";
import WithInputParameters from "./components/WithInputParameters";
import Forms from "./components/Forms";
import ConditionalRendering from "./components/ConditionalRendering";
import Lists from "./components/Lists";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <React.Fragment>
        {/*<WithInputParameters />*/}
        {/*<Forms />*/}
        {/*<ConditionalRendering />*/}
        <Lists />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
