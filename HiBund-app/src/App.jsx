import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Fitur from "./page/fitur";
import Artikel from "./page/artikel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tips from "./page/tips";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Fitur/>}></Route>
      <Route path="/artikel" element={<Artikel/>}></Route>
      <Route path="/tips" element={<Tips/>}></Route>
      </Routes>
      <Footer></Footer>

 

    </>
  );
}


export default App;
