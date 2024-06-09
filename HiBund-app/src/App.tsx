import NavBar from "./components/navbar";
import Jumbotron from "./components/beranda/jumbotron";
import Company from "./components/beranda/company";
import "./App.css";
function App() {
  return (
    <div>
      <NavBar /> 
      <Jumbotron />
      <Company />
    </div>
  );
}

export default App;
