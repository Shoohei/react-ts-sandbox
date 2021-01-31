import React, { PropTypes } from "react";
import LifeCycleComponent from "../../../utilities/LifeCycleComponent";

export default class Todo extends LifeCycleComponent {
  render() {
    return (
      <li>
        {this.props.text} ({this.props.id})
      </li>
    );
  }
}
