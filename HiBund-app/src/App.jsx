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
import EditProfile from "./pages/edit-profil";



function App() {
  return (
    <>
      
     <EditProfile></EditProfile>
      
    </>
  );
}

export default App;
