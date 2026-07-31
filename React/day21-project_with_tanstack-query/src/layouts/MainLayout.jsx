import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="p-2 min-h-screen bg-black text-white">
      <Navbar />
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout