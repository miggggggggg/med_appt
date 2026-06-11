import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Landing_Page/Navbar/Navbar";
import Landing_Page from "../components/Landing_Page/LandingPage.jsx";
import SignUp from "../components/Landing_Page/Sign_Up/Sign_Up.jsx";
import Login from "../components/Landing_Page/Login/Login.jsx";
import InstantConsultation from "../components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation.jsx";

import BookingConsultation from "../components/BookingConsultation.jsx";
import Notification from "../components/Notification/Notification.jsx";

function App() {
  // GLOBAL APPOINTMENT STATE (shared across pages)
  const [appointment, setAppointment] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />

     
      <Notification appointment={appointment} />

      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/instant-consultation"
          element={<InstantConsultation />}
        />

        
        <Route
          path="/booking-consultation"
          element={
            <BookingConsultation
              appointment={appointment}
              setAppointment={setAppointment}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;