import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Mainbar from "./Mainbar";
import Cards from "./Cards";

function App() {
  return (
    <div className="App background">
      <Navbar />
      <div style={{ width: "100%" }}>
        <Mainbar />
        <Cards />
      </div>
    </div>
  );
}

export default App;
