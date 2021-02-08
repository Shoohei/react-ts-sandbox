import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  if (todos) {
    console.log("TodoList.js -> if (todos)");
    return (
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
      </ul>
    );
  } else {
    console.log("TodoList.js -> else");
    return <p>No item</p>;
  }
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ),
  onTodoClick: PropTypes.func
};

export default TodoList;
