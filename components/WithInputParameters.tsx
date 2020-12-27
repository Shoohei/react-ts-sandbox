import React, { Component } from "react";

class Parent extends Component {
	render() {
		return (
				<div>
        <h1>Parent</h1>
        <ul>
          <li>
            <Child number="1" />
          </li>
          <li>
            <Child number="2" />
          </li>
        </ul>
      </div>
    );
	}
}
class Child extends Component {
	render() {
		return <p>Child {this.props.number}</p>;
	}
}

export default Parent;