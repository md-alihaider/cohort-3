import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Ali", id: 234 });

  const greet = useCallback(() => {
    console.log("Hellooo")
  },[])

  let calculation = useMemo(() => {
     console.log("calculation is running...")
    let sum = 0
    
    for (let i = 0; i < 100; i++) {
      sum += i
    }
    return sum
  },[])

  return (
    <div className="p-2">
      <h1>Memoization</h1>
      <h2>count is {count}</h2>
      <h2>Name of users is : {users.name} </h2>
      <h2>My sum is {calculation} </h2>
      <button onClick={()=> setUsers({...users, name:"Zahid"})}>Change user {" "} </button>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <Home users={users} />
      <About greet={greet} />
    </div>
  );
};

export default App;
