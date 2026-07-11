import React from 'react'

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="rounded p-5 bg-black flex item-center justify-between ">
      <div>logo</div>
      <div className=" flex gap-10 text-xl">
        <p onClick={()=> setIsCartOpen(false)} className=' cursor-pointer'>Home</p>
        <p onClick={()=> setIsCartOpen(true)} className=' cursor-pointer'>Cart</p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar