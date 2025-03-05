import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5014/login", formData);
      if (response.data.success) {
        // Store user data in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.username);
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay muted loop>
        <source src="/Project EcoGrow Manager/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form Overlay */}
      <div className="form-overlay">
        <h2>Login to Plant Inventory</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <i className="fas fa-lock"></i>
          </div>
          <div className="form-field">
            <button className="form-button" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="form-links">
          <a href="#">Forgot Password?</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;