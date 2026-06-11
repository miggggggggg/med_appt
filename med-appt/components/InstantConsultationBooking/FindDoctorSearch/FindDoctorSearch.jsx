import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindDoctorSearch.css";

const FindDoctorSearch = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const specialities = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
    "Psychiatrist",
    "Dentist",
    "Gynecologist",
    "General Physician"
  ];

  const handleSearch = (speciality) => {
    navigate(
      `/instant-consultation?speciality=${encodeURIComponent(speciality)}`
    );
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search doctor speciality..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => {
            setShowSuggestions(false);
          }, 200);
        }}
      />

      <button
        className="search-btn"
        onClick={() => handleSearch(searchText)}
      >
        Search
      </button>

      {showSuggestions && (
        <ul className="suggestions-list">
          {specialities
            .filter((item) =>
              item.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSearchText(item);
                  handleSearch(item);
                }}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;