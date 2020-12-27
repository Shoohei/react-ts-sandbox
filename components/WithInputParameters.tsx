import React, { Component } from "react";

class LifeCycleComponent extends Component {
  componentWillMount() {
    console.log(this.constructor.name + ": componentWillMount");
  }
  componentDidMount() {
    console.log(this.constructor.name + ": componentDidMount");
  }
  componentWillReceiveProps() {
    console.log(this.constructor.name + ": componentWillReceiveProps");
  }
  componentWillUpdate() {
    console.log(this.constructor.name + ": componentWillUpdate");
  }
  componentDidUpdate() {
    console.log(this.constructor.name + ": componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.constructor.name + ": componentWillUnmount");
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
class Child extends LifeCycleComponent {
  render() {
    return (
      <p>
        Child {this.props.childData.number} ({this.props.childData.name})
      </p>
    );
  }
}

// Default props
Parent.defaultProps = {
  cName: "Parent"
};

export default Parent;
