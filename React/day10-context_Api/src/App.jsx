import React from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen p-4'>
      <Navbar/>
      <ProductCard/>
    </div>
  )
}

export default App