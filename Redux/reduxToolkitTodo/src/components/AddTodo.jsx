import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("")
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Todo</h2>

      <p className="text-gray-500 text-sm mb-6">
        Create a new task to stay organized.
      </p>

      <form onSubmit={submitHandler} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Todo
          </label>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your todo..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
