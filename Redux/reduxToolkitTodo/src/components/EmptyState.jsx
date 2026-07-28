import React from "react";
import { ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
      <div className="bg-blue-100 p-5 rounded-full mb-5">
        <ClipboardList size={50} className="text-blue-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">No Todos Yet</h2>

      <p className="text-gray-500 text-center max-w-sm">
        You haven't added any tasks yet. Start by creating your first todo and
        stay organized.
      </p>
    </div>
  );
};

export default EmptyState;
