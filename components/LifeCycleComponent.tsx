import { Component } from "react";

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

export default LifeCycleComponent;
