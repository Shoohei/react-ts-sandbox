import React, { PropTypes } from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";

export default class AddTodo extends LifeCycleComponent {
  render() {
    return (
      <React.Fragment>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </React.Fragment>
    );
  }
  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }
}
