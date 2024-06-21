import Login from "./pages/login";
import Register from "./pages/regis";
import Forget from "./pages/lupa-password";
import ChangePassword from "./pages/ubah-pw";
import Verify from "./pages/verifikasi-otp";
import VerifyLanjut from "./pages/verify2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Profil from "./Pages/profil";
import EditProfile from "./Pages/edit-profil";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Fitur from "./page/fitur";
import Artikel from "./page/artikel";
import Home from "./page/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tips from "./page/tips";
import Komunitas from "./page/grup-komunitas";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/fitur" element={<Fitur/>}></Route>
       <Route path="/artikel" element={<Artikel/>}></Route>
       <Route path="/tips" element={<Tips/>}></Route>
       <Route path="/grup" element={<Komunitas/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/regis" element={<Register/>}></Route>
       <Route path="/forget" element={<Forget/>}></Route>
       <Route path="/otp" element={<Verify/>}></Route>
       <Route path="/ubah" element={<ChangePassword/>}></Route>
       <Route path="/otpLanjut" element={<VerifyLanjut/>}></Route>
       <Route path="/profil" element={<Profil/>}></Route>
       <Route path="/edit-profil" element={<EditProfile/>}></Route>
      </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
