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
import EditProfile from "./pages/edit-profil";



function App() {
  return (
    <>
      <NavBar></NavBar>
       <Routes>
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
