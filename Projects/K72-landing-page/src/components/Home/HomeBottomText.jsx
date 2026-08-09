import React from 'react'
import { Link } from 'react-router'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 pb-3'>
      <Link className='text-[6.5vw] border-3 rounded-full px-10 pt-3.5 leading-[5vw] border-white uppercase'>Projects</Link>
      <Link className='text-[6.5vw] border-3 rounded-full px-10 pt-3.5 leading-[5vw] border-white uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottomText