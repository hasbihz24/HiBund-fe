import Home from './page/home';
import Fitur from './page/fitur';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Fitur />} />
       </Routes>

    </>
  )
}

export default App;
