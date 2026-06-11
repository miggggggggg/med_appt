import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.patientName.trim()) {
      return "Patient name is required";
    }
    if (!formData.date) {
      return "Please select a date";
    }
    if (!formData.time) {
      return "Please select a time slot";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    alert(
      `Appointment booked with ${doctorName}\n` +
      `Name: ${formData.patientName}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}`
    );

    setFormData({
      patientName: "",
      date: "",
      time: "",
      notes: "",
    });

    setError("");
    onClose(); // close form after booking (optional)
  };

  return (
    <div className="appointment-form-overlay">
      <div className="appointment-form-container">

        <h2>Book Appointment</h2>
        <p>Doctor: {doctorName}</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>

          {/* Patient Name */}
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
          />

          {/* Date Picker (future dates only) */}
          <input
            type="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />

          {/* Time Slot */}
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">Select Time Slot</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>

          {/* Optional Notes */}
          <textarea
            name="notes"
            placeholder="Additional notes (optional)"
            value={formData.notes}
            onChange={handleChange}
          />

          <div className="form-buttons">
            <button type="submit">Confirm Appointment</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;