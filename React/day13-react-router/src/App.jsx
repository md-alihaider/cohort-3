import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [toggle, setToggle] = useState("Home");
  return (
    <div className="h-screen p-2 text-xl">
      <nav className=" flex items-center justify-between mb-2 ">
        <h1>logo</h1>
        <div className=" flex items-center justify-between gap-10 cursor-pointer">
          <p onClick={() => setToggle("Home")}>Home</p>
          <p onClick={() => setToggle("About")}>About</p>
          <p onClick={() => setToggle("Contact")}>Contact</p>
        </div>
        <button>Login</button>
      </nav>
      <div>
        {toggle === "Home" && <Home />}
        {toggle === "About" && <About />}
        {toggle === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
