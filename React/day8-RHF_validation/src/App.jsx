import React, { useState } from "react";
import UserCard from "./components/UserCard";
import CreateUserForm from "./components/CreateUserForm";
import Navbar from "./components/Navbar";

const App = () => {
  // toggle = false shows UserCard, toggle = true shows CreateUserForm
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Optional: If you want the Navbar "Create" button to work, 
        you can pass setToggle down as a prop like this:
        <NavbarDark setToggle={setToggle} toggle={toggle} /> 
      */}
      <Navbar setToggle={setToggle} />

      {/* Main Content Area */}
      <main className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 h-[calc(100vh-64px)]">
        {toggle ? (
          <CreateUserForm />
        ) : (
          <UserCard
            name="Alex Developer"
            role="Frontend Engineer"
            email="alex@example.com"
          />
        )}
      </main>

      {/* Temporary Floating Button just to test the toggle state easily */}
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
