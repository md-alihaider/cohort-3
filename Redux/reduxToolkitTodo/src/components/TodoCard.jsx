import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
const TodoCard = ({ todo }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center justify-between group">
      {/* Todo Text */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>

        <p className="text-gray-800 text-lg font-medium">{todo.text}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={()=> dispatch(editTodo(todo))} className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition">
          <Pencil size={18} />
        </button>

        <button onClick={()=> dispatch(removeTodo(todo.id))} className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
