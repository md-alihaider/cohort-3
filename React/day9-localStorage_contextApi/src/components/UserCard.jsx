import React from "react";

const UserCard = ({
  id,
  name = "Alex Developer",
  role = "Frontend Engineer",
  email = "alex@example.com",
  deleteUser,
  setUpdatedData,
  setToggle
}) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm w-full border border-gray-700">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="w-24 h-24 bg-gray-700 rounded-full border-4 border-gray-600 mb-4 flex items-center justify-center">
          <span className="text-3xl text-gray-400 font-bold">
            {name.charAt(0)}
          </span>
        </div>

        {/* User Details */}
        <h2 className="text-xl font-bold text-gray-100">{name}</h2>
        <p className="text-indigo-400 font-medium mb-1">{role}</p>
        <p className="text-gray-400 text-sm mb-6">{email}</p>

        {/* Action Buttons */}
        <div className="flex space-x-3 w-full">
          {/* Update Button */}
          <button
            onClick={() => {
              setUpdatedData({ id, name, role, email });
              setToggle((prev)=> !prev)
            }}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium transition"
          >
            Update
          </button>

          {/* Delete Button (Changed to red to indicate a delete action) */}
          <button
            onClick={() => deleteUser(id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
