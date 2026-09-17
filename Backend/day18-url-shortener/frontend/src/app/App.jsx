import { useState } from "react";
import "./App.css";
const App = () => {
  const [urls, setUrls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  return <div className="text-4xl">App</div>;
};

export default App;
