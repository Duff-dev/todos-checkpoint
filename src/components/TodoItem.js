import React, { useState } from "react";

const TodoItem = ({ todo, removeTodo }) => {
  const [editTodo, setEditTodo] = useState(todo.title);

  const deleteTodo = (e) => {
    e.preventDefault();
    removeTodo(todo.id);
  };

  return (
    <div className="todoItem">
      <input
        style={{ width: "100%", fontSize: "30px" }}
        type="text"
        value={editTodo}
        placeholder=""
        onChange={(e) => setEditTodo(e.target.value)}
      />
      <button className="button" onClick={deleteTodo}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
