import React, { useState } from "react";
import Todos from "./components/Todos";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "workout",
    },
    {
      id: uuidv4(),
      title: "job interview",
    },
    {
      id: uuidv4(),
      title: "hangout with friends",
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: uuidv4(), title: text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos.filter((todos) => todos.id !== index)];

    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todos</h1>
      <Todos todos={todos} removeTodo={removeTodo} />
      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
