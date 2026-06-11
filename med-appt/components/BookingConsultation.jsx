import DoctorCard from "./DoctorCard/DoctorCard";
import FindDoctorSearch from "./InstantConsultationBooking/FindDoctorSearch/FindDoctorSearch";
import { useState } from "react";

const BookingConsultation = () => {
  // Example doctor data (you can replace with API later)
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      experience: "10 years",
      rating: 4.8,
      image: "/images/doc1.jpg",
      profile: "Cardiologist specializing in heart health.",
      specialty: "Cardiologist",
    },
    {
      id: 2,
      name: "Dr. Michael Lee",
      experience: "7 years",
      rating: 4.5,
      image: "/images/doc2.jpg",
      profile: "General physician with preventive care focus.",
      specialty: "General Physician",
    },
    {
      id: 3,
      name: "Dr. Anita Sharma",
      experience: "12 years",
      rating: 4.9,
      image: "/images/doc3.jpg",
      profile: "Dermatologist for skin and cosmetic treatments.",
      specialty: "Dermatologist",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // FILTER DOCTORS BASED ON SEARCH
  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="booking-consultation-page">

      {/* SEARCH COMPONENT */}
      <FindDoctorSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* DOCTOR LIST */}
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              experience={doctor.experience}
              rating={doctor.rating}
              image={doctor.image}
              profile={doctor.profile}
            />
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>

    </div>
  );
};

export default BookingConsultation;