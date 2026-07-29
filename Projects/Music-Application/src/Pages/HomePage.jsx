import React, { useContext } from 'react'
import { AuthContextData } from '../context/AuthContext'

const HomePage = () => {
  const data = useContext(AuthContextData)
  console.log(data)
  return (
    <div>HomePage</div>
  )
}

export default HomePage