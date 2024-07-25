import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/regis";
import Forget from "./Pages/lupa-password";
import ChangePassword from "./Pages/ubah-pw";
import Verify from "./Pages/verifikasi-otp";
import VerifyLanjut from "./Pages/verify2";
import Profil from "./Pages/profil";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Fitur from "./page/fitur";
import Artikel from "./page/artikel";
import Home from "./page/home";
import Tips from "./page/tips";
import Komunitas from "./page/grup-komunitas";
import Konsultasi from "./page/konsultasi";
import ArtikelFull from "./page/artikel-full";

function App() {
  const location = useLocation();

  // Paths where the NavBar should be hidden
  const noNavBarPaths = ["/login", "/regis", "/forget", "/otp", "/ubah", "/otpLanjut"];

  return (
    <>
      {!noNavBarPaths.includes(location.pathname) && <NavBar />}
      <main className="pt-3 w-[1053px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel-full/:title" element={<ArtikelFull />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/grup" element={<Komunitas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/otp/:email" element={<Verify />} />
          <Route path="/ubah" element={<ChangePassword />} />
          <Route path="/otpLanjut" element={<VerifyLanjut />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </main>
      {!noNavBarPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
