import React, { useState } from 'react'
// import Contacts from './components/Contacts'
// import something, {OneF, Two} from './test'

const App = () => {
  //something(); // This is default export

  // OneF(); // this is named export and will give error as it should be named same as file name
  
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1> Count is - {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App