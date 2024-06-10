import NavBar from "./components/navbar";
import Jumbotron from "./components/beranda/jumbotron";
import Company from "./components/beranda/company";
import Introduction from "./components/beranda/introduction";

function App() {
  return (
    <div>
      <NavBar /> 
      <Jumbotron />
      <Company />
      <Introduction />
    </div>
  );
}

export default App;
