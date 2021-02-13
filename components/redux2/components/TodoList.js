import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  console.log("TodoList.js -> ", todos, toggleTodo);
  console.log("TodoList.js -> if (todos)", todos, toggleTodo);
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          onClick={() => {
            console.log("TodoList.js -> Todo.onClick", todo, todo.id);
            toggleTodo(todo.id);
          }}
        />
      ))}
    </ul>
  );
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
