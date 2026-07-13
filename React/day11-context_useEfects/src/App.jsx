import React, { useContext} from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { MyStore } from './context/MyContext';

const App = () => {
  let { count, setCount} = useContext(MyStore)
  console.log("App rendering");
  
  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <Home />
      <About />
      <Contact/>
    </div>
  )
}

export default App