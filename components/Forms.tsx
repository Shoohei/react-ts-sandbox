import React from "react";
import LifeCycleComponent from "../utilities/LifeCycleComponent";

class Forms extends LifeCycleComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: "Initial data..."
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div>
        <input type = "text" value = {this.state.data} onChange = {this.updateState} />
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Forms;
