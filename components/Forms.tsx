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
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        />
      </div>
    );
  }
}

class Content extends LifeCycleComponent {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.myDataProp}
          onChange={this.props.updateStateProp}
        />
        <p>{this.props.myDataProp}</p>
      </div>
    );
  }
}

export default Forms;
