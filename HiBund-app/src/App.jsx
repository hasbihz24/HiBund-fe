import Login from "./Pages/login";
import Register from "./Pages/regis";
import Forget from "./pages/lupa-password";
import ChangePassword from "./pages/ubah-pw";
import Verify from "./pages/verifikasi-otp";
import VerifyLanjut from "./pages/verify2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Profil from "./pages/profil";
import Fitur from "./page/fitur";
import Artikel from "./page/artikel";
import Home from "./page/home";
import Tips from "./page/tips";
import Komunitas from "./page/grup-komunitas";
import NotFound from "./pages/notfound";


function App() {
  return (
    <>
    <NavBar></NavBar>
      
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/fiturall" element={<Fitur/>}></Route>
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
       <Route path="*" element={<NotFound />} />
       </Routes>
       
       <Footer></Footer>
 
    </>
  );
}

export default App;
