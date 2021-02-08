import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, onTodoClick }) => {
  console.log("TodoList.js -> ", todos, toggleTodo);
  if (todos.length) {
    console.log("TodoList.js -> if (todos)", todos, onTodoClick);
    return (
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            onClick={() => {
              console.log("TodoList.js -> Todo.onClick", todo, index);
              toggleTodo(index);
            }}
          />
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
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
