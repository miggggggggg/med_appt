import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Landing_Page/Navbar/Navbar";
import Landing_Page from "../components/Landing_Page/LandingPage.jsx";
import SignUp from "../components/Landing_Page/Sign_Up/Sign_Up.jsx";
import Login from "../components/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;