import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/regis";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/regis" element={<Register />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
