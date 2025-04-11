import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Signup form submitted:', form);
    // Add API integration here
  };

  return (
    <div className="signup-container">
      {/* Left Side */}
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
                  onChange={handleChange}
                />{' '}
                <span>User</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  onChange={handleChange}
                />{' '}
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
