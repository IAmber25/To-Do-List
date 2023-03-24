import React, { useState } from "react";

const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
        />
        <button className="bg-blue-400  px-1 rounded-lg" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="bg-blue-400 ml-40  px-1 rounded-lg" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label className="flex gap-2">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todoContent}
      <button className="bg-blue-400  px-1 rounded-lg" onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
};

export default Task;
