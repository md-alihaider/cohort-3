import React from "react";
import { ListTodo, PencilLine } from "lucide-react";
import { useSelector } from "react-redux";

const Stats = () => {
  const todos = useSelector((state) => state.todo.todos);
  const editingTodo = useSelector((state) => state.todo.editTodo);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {/* Total Todos */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Total Todos</p>
          <h2 className="text-3xl font-bold text-gray-800">{todos.length}</h2>
        </div>

        <div className="bg-blue-100 p-3 rounded-full">
          <ListTodo className="text-blue-600" size={28} />
        </div>
      </div>

      {/* Editing */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Status</p>
          <h2
            className={`text-xl font-bold ${
              editingTodo ? "text-amber-600" : "text-green-600"
            }`}
          >
            {editingTodo ? "Editing..." : "Ready"}
          </h2>
        </div>

        <div
          className={`p-3 rounded-xl ${
            editingTodo
              ? "bg-amber-100 text-amber-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          <PencilLine className="text-yellow-600" size={28} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
