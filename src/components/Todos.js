import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={props.removeTodo} />
      ))}
    </div>
  );
};

export default Todos;
