import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from './api'; // Make sure the path is correct
import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.username || !form.password || !form.confirmPassword || !form.role) {
      alert("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = JSON.stringify({
<<<<<<< HEAD
=======
      username: form.username,
>>>>>>> 75799d8 (final commit)
      fullname: form.username,
      email: form.email,
      password: form.password,
      role: form.role,
    });

<<<<<<< HEAD
    callApi("POST", "http://localhost:9060/users/signup", data, handleApiResponse);
=======
    callApi("POST", "http://localhost:6090/users/signup", data, handleApiResponse);
>>>>>>> 75799d8 (final commit)
  };

  const handleApiResponse = (res) => {
    const result = res.split("::");
    alert(result[1]);
    if (result[0] === "200") {
      setForm({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        role: '',
      });
      // Optional: redirect to login page
      // window.location.href = "/signin";
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo">📅 Medica</div>
        <div className="signup-box">
          <h2>Welcome</h2>
          <p>Create an account Medica for free</p>
          <form onSubmit={handleSubmit}>
            <label>Enter email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Enter Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <label>Role</label>
            <div className="role-selection">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={form.role === 'user'}
                  onChange={handleChange}
                />
                <span>User</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={form.role === 'admin'}
                  onChange={handleChange}
                />
                <span>Admin</span>
              </label>
            </div>

            <label>Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="signup-btn">Sign Up</button>

            <div className="or">OR</div>

            <div className="social-buttons">
              <button type="button" className="google-btn">🟥 Sign up with Google</button>
              <button type="button" className="facebook-btn">🔵 Sign up with Facebook</button>
            </div>

            <p className="signin-link">
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="quote-container">
        <blockquote className="quote">
          <hr />
          <span>“</span> Book Easy. Feel Better Sooner. <span>”</span>
          <hr />
        </blockquote>
      </div>
    </div>
  );
}
