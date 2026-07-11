import React, { useState } from 'react'
import NestedComp from './components/NestedComp'
import Comp1 from './components/Comp1'

const TestComponents = () => {
  const [data, setData] = useState("hey this is central data")
  return (
    <div>
      <h1>All components</h1>
      <Comp1 data={data}>
        <NestedComp/>
      </Comp1>
    </div>
  )
}

export default TestComponents