import React, { useState } from 'react'
// import Contacts from './components/Contacts'
// import something, {OneF, Two} from './test'

const App = () => {
  //something(); // This is default export

  // OneF(); // this is named export and will give error as it should be named same as file name
  const [flag, setFlag] = useState(true);
  console.log(flag);
  const [count, setCount] = useState(0); // this useState is a hook and it remembers the state of the component if we normaly use it in a function it will not rerender the component

  // Hooks are special magical tools in React that help your website components "remember" things and do cool tricks behind the scenes
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1> Count is {count}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => setFlag(!flag)}>Change Flag</button>
    </div>
  );
}

export default App