import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css';

export default function Signin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder authentication logic
    console.log('Signin form submitted:', form);

    // Example condition to simulate login success
    if (form.username === 'admin' && form.password === 'admin') {
      alert('Login successful!');
      // Navigate to dashboard or home page
      navigate('/dashboard'); 
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-box">
        <div className="logo">📅 Medica</div>
        <h2>Welcome Back</h2>
        <p>Login to your Medica account</p>

        <form onSubmit={handleSubmit}>
          <label>Enter Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label>Enter Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signin-btn">Login</button>

          <div className="or">OR</div>

          <div className="social-buttons">
            <button type="button" className="google-btn">🟥 Continue with Google</button>
            <button type="button" className="facebook-btn">🔵 Continue with Facebook</button>
          </div>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
