import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const ReportsLayout = () => {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      fetchReports();
    }
  }, [navigate]);

  const fetchReports = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const response = await fetch(`${API_URL}/api/reports`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          Email: email,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // fallback demo structure if backend is empty
        const formatted = data.length
          ? data
          : [
              {
                id: "RPT-001",
                doctorName: "Dr. Smith",
                date: "2026-06-11",
                specialty: "Cardiology",
                file: "/patient_report.pdf",
              },
            ];

        setReports(formatted);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="reports-layout">

      <div className="reports-header">
        <h1>Your Medical Reports</h1>
        <p>View, open, or download your consultation reports</p>
      </div>

      <table className="reports-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Specialty</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.id}</td>
              <td>{report.doctorName}</td>
              <td>{report.date}</td>
              <td>{report.specialty}</td>

              {/* ACTIONS */}
              <td className="actions-cell">

                {/* VIEW (opens in new tab) */}
                <a
                  href={report.file || "/patient_report.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View
                </a>

                {/* DOWNLOAD */}
                <a
                  href={report.file || "/patient_report.pdf"}
                  download
                  className="download-btn"
                >
                  Download
                </a>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;