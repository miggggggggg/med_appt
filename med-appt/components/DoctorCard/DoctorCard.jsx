import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const DoctorCard = ({
  name,
  experience,
  rating,
  image,
  profile,
}) => {
  const [showForm, setShowForm] = useState(false);

  // stores appointment details
  const [appointment, setAppointment] = useState(null);

  // BOOK appointment (called from form)
  const handleBookAppointment = (data) => {
    setAppointment(data);
    setShowForm(false);
  };

  // CANCEL appointment
  const handleCancelAppointment = () => {
    setAppointment(null);
  };

  return (
    <div className="doctor-card">

      {/* IMAGE */}
      {image && (
        <img src={image} alt={name} className="doctor-card-image" />
      )}

      {/* DETAILS */}
      <h2>{name}</h2>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Rating:</strong> ⭐ {rating}/5</p>

      {profile && <p>{profile}</p>}

      {/* APPOINTMENT STATUS */}
      {appointment ? (
        <div className="appointment-info">
          <h4>Appointment Booked ✅</h4>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Time:</strong> {appointment.time}</p>
          <p><strong>Patient:</strong> {appointment.patientName}</p>

          <button
            className="cancel-btn"
            onClick={handleCancelAppointment}
          >
            Cancel Appointment
          </button>
        </div>
      ) : (
        <button
          className="book-btn"
          onClick={() => setShowForm(true)}
        >
          Book Appointment
        </button>
      )}

      {/* FORM */}
      {showForm && (
        <AppointmentForm
          doctorName={name}
          onClose={() => setShowForm(false)}
          onBook={handleBookAppointment}
        />
      )}
    </div>
  );
};

export default DoctorCard;