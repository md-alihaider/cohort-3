import React from 'react'
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <h1>This is Home</h1>
      <Outlet />
    </div>
  );
}

export default Home