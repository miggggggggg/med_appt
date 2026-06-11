import React, { useEffect, useState } from "react";
import "../Notification/Notification.css";

const Notification = ({ appointment }) => {
  // controls visibility of notification
  const [visible, setVisible] = useState(false);

  // store latest appointment data locally
  const [data, setData] = useState(null);

  // SHOW notification when appointment is created/updated
  useEffect(() => {
    if (appointment) {
      setData(appointment);
      setVisible(true);
    }
  }, [appointment]);

  // HIDE notification when appointment is cancelled (set to null)
  useEffect(() => {
    if (!appointment) {
      setVisible(false);
      setData(null);
    }
  }, [appointment]);

  if (!visible || !data) return null;

  return (
    <div className="notification-container">
      <div className="notification-box">
        <h4>Appointment Confirmed ✅</h4>

        <p>
          <strong>Name:</strong> {data.patientName}
        </p>

        <p>
          <strong>Date:</strong> {data.date}
        </p>

        <p>
          <strong>Time:</strong> {data.time}
        </p>

        <button
          className="close-btn"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;