import React from "react";

const TodoItem = ({ todo, removeTodo }) => {
  const deleteTodo = (e) => {
    e.preventDefault();
    removeTodo(todo.id);
  };

  return (
    <div className="todoItem">
      <h2>{todo.title}</h2>
      <button className="button" onClick={deleteTodo}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
