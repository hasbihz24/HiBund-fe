import "./fitur.css";
import NavBar from "../components/navbar";
import JumbotronFitur from "../components/fitur/jumbotronFitur";
import NavigationFitur from "../components/fitur/navigationFitur";
import Footer from "../components/footer";

function Fitur() {
  return (
    <div>
      <NavBar />
      <JumbotronFitur />
      <NavigationFitur />
      <Footer/>
    </div>
  );
}

export default Fitur;
