import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css';
import { callApi, setSession } from './api'; // ✅ Import API helpers

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

    // Validate form input
    if (!form.username || !form.password) {
      alert('All fields are required!');
      return;
    }

    const data = JSON.stringify({
      email: form.username,
      password: form.password,
    });

    callApi('POST', 'http://localhost:8070/users/signin', data, handleResponse);
  };

  const handleResponse = (res) => {
    const rdata = res.split('::');

    if (rdata[0] === '200') {
      setSession('csrid', rdata[1], 1); // Save session
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert(rdata[1]); // Show error from server
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
