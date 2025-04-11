import React, { useState } from "react";
import "./Patient.css";

const specialities = [
  { name: "General Physician", img: "https://img.icons8.com/ios-filled/100/doctor-male.png" },
  { name: "Gynecologist", img: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png" },
  { name: "Dermatologist", img: "https://img.icons8.com/ios/100/skin.png" },
  { name: "Pediatrician", img: "https://img.icons8.com/ios/100/baby.png" },
  { name: "Neurologist", img: "https://img.icons8.com/ios/100/brain.png" },
  { name: "Gastroenterologist", img: "https://img.icons8.com/ios/100/stomach.png" },
];

const Patient = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bookedAppointment, setBookedAppointment] = useState(null);

  const handleBookClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookedAppointment({
      doctor: selectedDoctor,
      date: appointmentDate,
      time: appointmentTime,
    });
    setShowForm(false);
  };

  return (
    <div className="patient-page">
      <header className="header">
        <div className="logo">Medica</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">All Doctors</a>
          <a href="#">Contact</a>
          <a href="#">About us</a>
          <a href="#">Calendar</a>
        </nav>
        <div className="header-icons">
          <span>🔔</span>
          <span>💬</span>
          <img
            src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
            alt="User"
            className="user-icon"
          />
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h1>Book Appointment With Trusted Doctors</h1>
          <button className="hero-button" onClick={handleBookClick}>
            Book Appointment
          </button>
        </div>
        <img
          className="hero-img"
          src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
          alt="Doctor team"
        />
      </section>

      {showForm && (
        <section className="booking-form-section">
          <h2>Book Your Appointment</h2>
          <form onSubmit={handleFormSubmit} className="booking-form">
            <label>
              Select Doctor:
              <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
                <option value="">-- Choose a Doctor --</option>
                {specialities.map((s, idx) => (
                  <option key={idx} value={s.name}>{s.name}</option>
                ))}
              </select>
            </label>
            <label>
              Select Date:
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </label>
            <label>
              Select Time:
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="submit-button">Confirm Appointment</button>
          </form>
        </section>
      )}

      {bookedAppointment && (
        <section className="appointment-details">
          <h2>Your Appointment</h2>
          <p><strong>Doctor:</strong> {bookedAppointment.doctor}</p>
          <p><strong>Date:</strong> {bookedAppointment.date}</p>
          <p><strong>Time:</strong> {bookedAppointment.time}</p>
        </section>
      )}

      <section className="speciality-section">
        <h2>Find By Speciality</h2>
        <div className="speciality-list">
          {specialities.map((s, index) => (
            <div key={index} className="speciality-card">
              <img src={s.img} alt={s.name} />
              <p>{s.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Patient;
