import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [doctors, setDoctors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const form = e.target;

    const newDoctor = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      speciality: form.speciality.value,
      degree: form.degree.value,
      address1: form.address1.value,
      address2: form.address2.value,
      experience: form.experience.value,
      fees: form.fees.value,
      about: form.about.value,
    };

    setDoctors([...doctors, newDoctor]);
    form.reset();
    setActiveTab("doctors-list"); // Redirect to doctors list after adding
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100vw", backgroundColor: "#f8f9fa" }}
      >
        <div className="text-center">
          <h1 className="mb-3">You have been logged out.</h1>
          <button
            className="btn btn-primary btn-sm px-3 py-1"
            onClick={() => setLoggedIn(true)}
          >
            Log In Again
          </button>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (activeTab === "add-doctor") {
      return (
        <div className="card form-card">
          <h4 className="mb-4">Add Doctor</h4>
          <div className="row g-4">
            <div className="col-md-3 d-flex flex-column align-items-center">
              <div className="profile-placeholder">
                <i className="bi bi-person fs-1 text-muted"></i>
              </div>
              <p className="mt-2 text-muted text-center">
                Upload doctor <br /> picture
              </p>
            </div>

            <div className="col-md-9">
              <form onSubmit={handleAddDoctor}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your name</label>
                    <input name="name" type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Speciality</label>
                    <select name="speciality" className="form-select">
                      <option>General physician</option>
                      <option>Cardiologist</option>
                      <option>Dentist</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Doctor Email</label>
                    <input name="email" type="email" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Degree</label>
                    <input name="degree" type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Set Password</label>
                    <input name="password" type="password" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input name="address1" type="text" className="form-control mb-2" />
                    <input name="address2" type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Experience</label>
                    <select name="experience" className="form-select">
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Fees</label>
                    <input name="fees" type="text" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">About Doctor</label>
                    <textarea name="about" className="form-control" rows="4"></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary mt-3"  >
                        <span onClick={navigate('/doctor')}>Add Doctor</span>
                      
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "doctors-list") {
      return (
        <div className="card p-4 shadow-sm border-0">
          <h4 className="mb-4">Doctors List</h4>
          {doctors.length === 0 ? (
            <p className="text-muted">No doctors added yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Speciality</th>
                    <th>Experience</th>
                    <th>Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doc, index) => (
                    <tr key={index}>
                      <td>{doc.name}</td>
                      <td>{doc.email}</td>
                      <td>{doc.speciality}</td>
                      <td>{doc.experience}</td>
                      <td>{doc.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }

    return <div className="placeholder-text">Select an option from the navbar to view content.</div>;
  };

  return (
    <div className="dashboard-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid py-2">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <div className="bg-primary text-white px-2 py-1 rounded fs-5">🏠</div>
            <div>
              <div className="fw-bold mb-0">Prescripto</div>
              <small className="text-muted">Dashboard Panel</small>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
              <li className="nav-item">
                <button className="btn btn-primary btn-sm" type="button" onClick={() => setActiveTab("home")}>
                  Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary btn-sm" type="button" onClick={() => setActiveTab("appointments")}>
                  Appointments
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary btn-sm" type="button" onClick={() => setActiveTab("add-doctor")}>
                  Add Doctor
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary btn-sm" type="button" onClick={() => setActiveTab("doctors-list")}>
                  Doctors List
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger btn-sm" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main-content py-5 px-3">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;