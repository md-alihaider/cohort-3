import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className=" border-r border-gray-500 flex flex-col gap-10">
      <NavLink to={"/main"}>
        <h1>logo</h1>
      </NavLink>
      <div className="flex flex-col gap-4 ml-5">
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/users"}>Users</NavLink>
        <NavLink to={"/main/products"}>Products</NavLink>
      </div>
    </div>
  );
}

export default Navbar