import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Todos</h1>

        <div className="space-y-4">
          {/* Todo Card */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <p className="text-gray-800 text-lg">Learn Redux Toolkit</p>

            <div className="flex gap-2">
              <button className="p-2 rounded-md bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
                <Pencil size={18} />
              </button>

              <button className="p-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
