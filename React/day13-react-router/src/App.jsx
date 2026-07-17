import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NavLink, Route, Routes } from "react-router";

const App = () => {
  // const [toggle, setToggle] = useState("Home");
  return (
    <div className="h-screen p-2 text-xl bg-blue-950 text-white">
      <nav className=" flex items-center justify-between mb-2 ">
        <h1>logo</h1>
        <div className=" flex items-center justify-between gap-10 cursor-pointer">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <button>Login</button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
