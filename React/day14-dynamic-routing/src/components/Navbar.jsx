import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="rounded p-5 bg-black flex item-center justify-between text-white">
      <div>logo</div>
      <div className=" flex gap-10 text-xl">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
