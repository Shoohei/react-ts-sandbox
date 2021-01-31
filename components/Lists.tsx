import React from "react";
import LifeCycleComponent from "../utilities/LifeCycleComponent";

class Lists extends LifeCycleComponent {
  people: { id: number; name: string }[];
  constructor(props) {
    super(props);

    this.people = [
      { id: 1, name: "Tony" },
      { id: 2, name: "Mika" },
      { id: 3, name: "Bob" },
      { id: 4, name: "Bob" }
    ];
  }

  render() {
    return <People people={this.people} />;
  }
}
function People(props) {
  const people = props.people;
  const renderedItems = people.map(person => (
    <Person key={person.id} person={person} />
  ));
  return (
    <React.Fragment>
      <h2>Rendering lists inside component</h2>
      <ul>{renderedItems}</ul>
    </React.Fragment>
  );
}
function Person(props) {
  const person = props.person;
  return <li>{person.name}</li>;
}

export default Lists;
