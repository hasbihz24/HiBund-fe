import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/regis";
import Forget from "./Pages/lupa-password";
import changePassword from "./Pages/ubah-pw";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/regis" element={<Register />} ></Route>
      <Route path="/forget" element={<Forget />} ></Route>
      <Route path="/ubah" element={<changePassword />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
