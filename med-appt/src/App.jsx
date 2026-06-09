import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Landing_Page/Navbar/Navbar"
import Landing_Page from "../components/Landing_Page/LandingPage.jsx";
import SignUp from '../components/Landing_Page/Sign_Up/Sign_Up.jsx'
function App() {

  
  {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing_Page />} />
      </Routes>
    </BrowserRouter> 

  return (
    <>
    <Navbar></Navbar>
    <Landing_Page></Landing_Page>
    <SignUp></SignUp>
    </>
  );
}

export default App;