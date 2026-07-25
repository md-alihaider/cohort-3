import React from "react";
import { ListTodo, PencilLine } from "lucide-react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {/* Total Todos */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Total Todos</p>
          <h2 className="text-3xl font-bold text-gray-800">12</h2>
        </div>

        <div className="bg-blue-100 p-3 rounded-full">
          <ListTodo className="text-blue-600" size={28} />
        </div>
      </div>

      {/* Editing */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Editing</p>
          <h2 className="text-3xl font-bold text-gray-800">1</h2>
        </div>

        <div className="bg-yellow-100 p-3 rounded-full">
          <PencilLine className="text-yellow-600" size={28} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
