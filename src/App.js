import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

function App() {
  let nextId = 3;
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (title) => {
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
