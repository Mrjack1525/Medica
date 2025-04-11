import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from "./Signup";
import Signin from "./Signin";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Bootstrap Navbar */}
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Med<span style={{ color: "#00bcd4" }}>ica</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Doctors</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Patients
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Appointments</a></li>
                  <li><a className="dropdown-item" href="#">Medical History</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Billing</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Admin</a>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-3">
              <button
                className="btn btn-outline-success me-2"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => navigate("/signin")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Search Doctor, Make an Appointment</h1>
        <p>
          Discover the best doctors, clinic & hospital the city nearest to you.
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Search Location" />
          <input
            type="text"
            placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
          />
          <button className="search-btn">🔍</button>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties">
        <h2>Clinic and Specialties</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="icon-grid">
          {["Kidney", "Brain", "Tooth", "Ear", "Heart"].map((item, index) => (
            <div className="icon-card" key={index}>
              <div className="icon">🏥</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
