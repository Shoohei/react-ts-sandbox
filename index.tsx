import React, { Component } from "react";
import { render } from "react-dom";
import WithInputParameters from "./components/WithInputParameters";
import Forms from "./components/Forms";
import ConditionalRendering from "./components/ConditionalRendering";
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
      <div>
        {/*<WithInputParameters />*/}
        {/*<Forms />*/}
        <ConditionalRendering />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
