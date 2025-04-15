<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
>>>>>>> 75799d8 (final commit)
import "./Patient.css";

const specialities = [
  { name: "General Physician", img: "https://img.icons8.com/ios-filled/100/doctor-male.png" },
  { name: "Gynecologist", img: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png" },
  { name: "Dermatologist", img: "https://img.icons8.com/ios/100/skin.png" },
  { name: "Pediatrician", img: "https://img.icons8.com/ios/100/baby.png" },
  { name: "Neurologist", img: "https://img.icons8.com/ios/100/brain.png" },
  { name: "Gastroenterologist", img: "https://img.icons8.com/ios/100/stomach.png" },
];

<<<<<<< HEAD
const Patient = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bookedAppointment, setBookedAppointment] = useState(null);
=======
const unavailableDoctors = {
  "General Physician": ["2025-04-14"],
  "Gynecologist": ["2025-04-18"],
  "Gynecologist": ["2025-04-26"],
  "Gynecologist": ["2025-04-20"],
  "Gynecologist": ["2025-04-10"],
  "Gynecologist": ["2025-04-11"],"Gynecologist": ["2025-04-2"],"Gynecologist": ["2025-04-7"],"Gynecologist": ["2025-04-28"],"Gynecologist": ["2025-04-19"],"Gynecologist": ["2025-04-28"],
  "General Physician": ["2025-04-19"],"General Physician": ["2025-04-21"],"General Physician": ["2025-04-4"],"General Physician": ["2025-04-10"],"General Physician": ["2025-04-1"],
  "General Physician": ["2025-04-25"],"General Physician": ["2025-04-9"],"General Physician": ["2025-04-29"],"General Physician": ["2025-04-12"],
  "Dermatologist": ["2025-04-19"],"Dermatologist": ["2025-04-21"],"Dermatologist": ["2025-04-4"],"Dermatologist": ["2025-04-10"],"Dermatologist": ["2025-04-1"],
  "Dermatologist": ["2025-04-25"],"Dermatologist": ["2025-04-9"],"Dermatologist": ["2025-04-29"],"Dermatologist": ["2025-04-12"],
  "Pediatrician": ["2025-04-18"],"Pediatrician": ["2025-04-26"],"Pediatrician": ["2025-04-20"],"Pediatrician": ["2025-04-10"],
  "Pediatrician": ["2025-04-11"],"Pediatrician": ["2025-04-2"],"Pediatrician": ["2025-04-7"],"Pediatrician": ["2025-04-28"],"Pediatrician": ["2025-04-19"],"Pediatrician": ["2025-04-28"],
};

const bookedSlots = [
  { doctor: "Dermatologist", date: "2025-04-12", time: "10:00" },
  { doctor: "Neurologist", date: "2025-04-13", time: "11:30" },
];

const Patient = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [slotStatus, setSlotStatus] = useState({ doctorAvailable: null, slotAvailable: null });
>>>>>>> 75799d8 (final commit)

  const handleBookClick = () => {
    setShowForm(true);
  };

<<<<<<< HEAD
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookedAppointment({
      doctor: selectedDoctor,
      date: appointmentDate,
      time: appointmentTime,
    });
    setShowForm(false);
=======
  const resetForm = () => {
    setSelectedDoctor("");
    setAppointmentDate(null);
    setAppointmentTime("");
    setSlotStatus({ doctorAvailable: null, slotAvailable: null });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (slotStatus.doctorAvailable && slotStatus.slotAvailable) {
      const newAppointment = {
        doctor: selectedDoctor,
        date: appointmentDate.toISOString().split("T")[0],
        time: appointmentTime,
      };
      setAppointments((prev) => [...prev, newAppointment]);
      setShowForm(false);
      resetForm();
    }
  };

  const handleCancel = (index) => {
    setAppointments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReschedule = (index) => {
    const appointmentToEdit = appointments[index];
    setSelectedDoctor(appointmentToEdit.doctor);
    setAppointmentDate(new Date(appointmentToEdit.date));
    setAppointmentTime(appointmentToEdit.time);
    setShowForm(true);
    setAppointments((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (selectedDoctor && appointmentDate && appointmentTime) {
      const formattedDate = appointmentDate.toISOString().split("T")[0];
      const isDoctorUnavailable = unavailableDoctors[selectedDoctor]?.includes(formattedDate);
      const isSlotTaken = bookedSlots.concat(appointments).some(
        (slot) =>
          slot.doctor === selectedDoctor &&
          slot.date === formattedDate &&
          slot.time === appointmentTime
      );

      setSlotStatus({
        doctorAvailable: !isDoctorUnavailable,
        slotAvailable: !isSlotTaken,
      });
    }
  }, [selectedDoctor, appointmentDate, appointmentTime, appointments]);

  const isDateDisabled = (date) => {
    if (!selectedDoctor) return false;
    const formatted = date.toISOString().split("T")[0];
    return unavailableDoctors[selectedDoctor]?.includes(formatted);
>>>>>>> 75799d8 (final commit)
  };

  return (
    <div className="patient-page">
      <header className="header">
        <div className="logo">Medica</div>
        <nav className="nav-links">
          <a href="#">Home</a>
<<<<<<< HEAD
          <a href="#">All Doctors</a>
          <a href="#">Contact</a>
          <a href="#">About us</a>
=======
          <a href="#">Book Now</a>
          <a href="#">Contact</a>
>>>>>>> 75799d8 (final commit)
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
<<<<<<< HEAD
            <label>
              Select Date:
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </label>
=======

            <label>
              Select Date:
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                filterDate={(date) => !isDateDisabled(date)}
                dayClassName={(date) => {
                  if (!selectedDoctor) return "";
                  const formatted = date.toISOString().split("T")[0];
                  return unavailableDoctors[selectedDoctor]?.includes(formatted)
                    ? "unavailable-date"
                    : "available-date";
                }}
                placeholderText="Select a date"
                minDate={new Date()}
                required
              />
            </label>

>>>>>>> 75799d8 (final commit)
            <label>
              Select Time:
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </label>
<<<<<<< HEAD
            <button type="submit" className="submit-button">Confirm Appointment</button>
=======

            {selectedDoctor && appointmentDate && appointmentTime && (
              <div className="availability-status">
                <p>
                  Doctor Availability:{" "}
                  <span style={{ color: slotStatus.doctorAvailable ? "green" : "red" }}>
                    {slotStatus.doctorAvailable ? "Available ✅" : "Not Available ❌"}
                  </span>
                </p>
                <p>
                  Slot Availability:{" "}
                  <span style={{ color: slotStatus.slotAvailable ? "green" : "red" }}>
                    {slotStatus.slotAvailable ? "Available ✅" : "Already Booked ❌"}
                  </span>
                </p>
              </div>
            )}

            {selectedDoctor && appointmentDate && appointmentTime && (
              <div className="appointment-preview">
                <h3>Appointment Summary</h3>
                <p><strong>Doctor:</strong> {selectedDoctor}</p>
                <p><strong>Date:</strong> {appointmentDate.toISOString().split("T")[0]}</p>
                <p><strong>Time:</strong> {appointmentTime}</p>
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={slotStatus.doctorAvailable === false || slotStatus.slotAvailable === false}
            >
              Confirm Appointment
            </button>
>>>>>>> 75799d8 (final commit)
          </form>
        </section>
      )}

<<<<<<< HEAD
      {bookedAppointment && (
        <section className="appointment-details">
          <h2>Your Appointment</h2>
          <p><strong>Doctor:</strong> {bookedAppointment.doctor}</p>
          <p><strong>Date:</strong> {bookedAppointment.date}</p>
          <p><strong>Time:</strong> {bookedAppointment.time}</p>
=======
      {appointments.length > 0 && (
        <section className="appointment-details">
          <h2>Your Appointments</h2>
          {appointments.map((appt, index) => (
            <div key={index} className="appointment-card">
              <p><strong>Doctor:</strong> {appt.doctor}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <button onClick={() => handleReschedule(index)} className="reschedule-btn">Reschedule</button>
              <button onClick={() => handleCancel(index)} className="cancel-btn">Cancel</button>
            </div>
          ))}
>>>>>>> 75799d8 (final commit)
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

<<<<<<< HEAD
export default Patient;
=======
export default Patient;
>>>>>>> 75799d8 (final commit)
