import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import WithInputParameters from "./components/WithInputParameters";
import LifeCycleComponent from "./utility/LifeCycleComponent";
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
        <WithInputParameters />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
