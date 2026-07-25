import React from "react";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-8 h-fit">
            <AddTodo />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            <Todos />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
