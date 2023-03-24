import React from "react";
import Task from "./Task";

const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul className="bg-orange-300 flex flex-col justify-center items-center gap-4 m-10 p-5 rounded-lg">
      {todos.map((todo) => (
        <li className="bg-red-500 gap-2 p-2 rounded-md" key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
