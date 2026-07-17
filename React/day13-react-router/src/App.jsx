import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  // const [toggle, setToggle] = useState("Home");
  return (
    <div className="h-screen p-2 text-xl bg-blue-950 text-white">
      <Navbar/>
      <AppRoutes/>
    </div>
  );
};

export default App;
