import React, { useContext } from 'react'
import { MyStore } from '../context/MyContex'

const Comp4 = () => {
  const cd = useContext(MyStore)
  console.log(cd);
  
  return (
    <div>
      <h1>this is component 4</h1>
    </div>
  )
}

export default Comp4