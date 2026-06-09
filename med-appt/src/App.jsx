import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Landing_Page/Navbar/Navbar"
import Landing_Page from "../components/Landing_Page/LandingPage.jsx";
function App() {

  <Route path="/" element={<Landing_Page/>}/>

  return (
   
      <>
       <div className="App">
        <Landing_Page></Landing_Page>

        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App;