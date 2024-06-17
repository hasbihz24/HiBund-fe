import Login from "./pages/login";
import Register from "./pages/regis";
import Forget from "./pages/lupa-password";
import ChangePassword from "./pages/ubah-pw";
import Verify from "./Pages/verifikasi-otp";
import VerifyLanjut from "./pages/verify2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/regis" element={<Register/>} ></Route>
          <Route path="/forget" element={<Forget/>}></Route>
          <Route path="/ubah" element={<ChangePassword/>}></Route>
          <Route path="/otp" element={<Verify/>}></Route>
          <Route path="/otp2" element={<VerifyLanjut/>}></Route>
        </Routes>
    </>
  );
}

export default App;
