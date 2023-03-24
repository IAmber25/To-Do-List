import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [addTodo, setAddTodo] = useState("");

  return (
    <div className="bg-gray-500 rounded-sm flex justify-center items-center  m-10 p-5 gap-2" >
      <input
        className="border border-zinc-200 rounded-md px-2 w-auto outline-none caret-gray-700"
        placeholder="Add Todo"
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />
      <button
      className="border border-black px-4 rounded-md"
        onClick={() => {
          setAddTodo("");
          onAddTodo(addTodo);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
