import React from "react";
import "./Doctors.css";

const Doctors = () => {
  return (
    <><div className="container">
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <img src="https://img.icons8.com/color/48/calendar--v1.png" alt="logo" />
          <span>Medica</span>
        </div>
        <nav className="nav-links">
          <a href="#description">Home</a>
          <a href="#">All Doctors</a>
          <a href="#illustration">Contact</a>
          <a href="#">About us</a>
          <a href="#">Calendar</a>
        </nav>
        <br/>
        <br/>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <img className="avatar avatar-left" src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" />
        <img className="avatar avatar-right" src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar" />
        <img className="avatar avatar-bottom" src="https://randomuser.me/api/portraits/men/46.jpg" alt="avatar" />

        <h1>
          Effortlessly organize <br />
          your <span className="highlight">appointment</span>
        </h1>
        <p className="description">
          Utilize digital calendars or scheduling apps to keep track of your appointments,
          deadlines, and events. These tools often offer reminders and can sync across
          multiple devices, ensuring you stay on top of your schedule.
        </p>
        <button className="cta">Get started</button>

        <div className="illustration">
          <img
            src="https://img.icons8.com/ios-filled/48/hospital.png" />
        </div>
      </main>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card user">
          <img src="https://img.icons8.com/fluency-systems-filled/48/user.png" alt="users" />
          <h3>1+M</h3>
          <p>New Users</p>
        </div>
        <div className="stat-card schedule">
          <img src="https://img.icons8.com/ios-filled/48/calendar.png" alt="schedule" />
          <h3>2+M</h3>
          <p>Meeting Schedule</p>
        </div>
        <div className="stat-card hospital">
          <img src="https://img.icons8.com/ios-filled/48/hospital.png" alt="hospital" />
          <h3>200+</h3>
          <p>Trusted Hospitals</p>
        </div>
        <div className="stat-card time">
          <img src="https://img.icons8.com/ios-filled/48/clock.png" alt="save time" />
          <h3>40%</h3>
          <p>Save Time</p>
        </div>
      </section>
    </div><footer className="footer">
        <hr className="footer-divider" />
        <div className="footer-content">
          <select className="language-select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
          </select>
          <div className="footer-links">
            <span>© 2022 Medica, Inc.</span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer></>
  );
};

export default Doctors;