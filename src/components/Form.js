import React, { useState } from "react";

const Form = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = props.addTodo;

  const doSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form className="form" onSubmit={doSubmit}>
      <input
        style={{ width: "100%", fontSize: "20px" }}
        type="text"
        value={newTodo}
        placeholder="add Todo..."
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="button2">Submit</button>
    </form>
  );
};

export default Form;
