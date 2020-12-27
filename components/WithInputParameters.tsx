import React, { Component } from "react";

class LifeCycleComponent extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }
}

class Parent extends LifeCycleComponent {
  render() {
    const child1 = { name: "Child one", number: 1 };
    const child2 = { name: "Child two", number: 2 };
    return (
      <div>
        <h1>Parent</h1>
        <ul>
          <li>
            <Child childData={child1} />
          </li>
          <li>
            <Child childData={child2} />
          </li>
        </ul>
      </div>
    );
  }
}
class Child extends Component {
  render() {
    return (
      <p>
        Child {this.props.childData.number} ({this.props.childData.name})
      </p>
    );
  }
}

export default Parent;
