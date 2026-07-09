import React, { useState } from "react";
import UserCard from "./components/UserCard";
import CreateUserForm from "./components/CreateUserForm";
import Navbar from "./components/Navbar";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });

    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar setToggle={setToggle} />

      {/* Main Content Area */}
      <main className="flex flex-wrap justify-center items-center py-12 px-4 sm:px-6 lg:px-8 h-[calc(100vh-64px)] gap-2">
        {toggle ? (
          <CreateUserForm
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        ) : (
          users.map((elem, index) => (
            <UserCard
              deleteUser={deleteUser}
              ind={index}
              key={index} // Ideally use elem.id or elem.email if they are unique
              name={elem.name}
              role={elem.role}
              email={elem.email}
            />
          ))
        )}
      </main>

      {/* Temporary Floating Button */}
      <button
        onClick={() => setToggle(!toggle)}
        className="fixed bottom-8 right-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-3 shadow-lg font-bold transition-all"
      >
        {toggle ? "View Profile" : "Add New User"}
      </button>
    </div>
  );
};

export default App;
