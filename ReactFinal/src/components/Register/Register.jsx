import React from "react";
import "./Register.css";

const Registration = () => {
  return (
    <div className="video-container">
      {/* Video Background */}
      <video autoPlay muted loop>
        <source src="/Project EcoGrow Manager/videos/video1update1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Registration Form */}
      <div className="form-container">
        <h2>Create Your Account</h2>
        <form action="/register" method="post">
          <div className="form-field">
            <label className="form-label" htmlFor="username">
              Username:
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-field">
            <button className="form-button" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="additional-links">
          <p>
            Already have an account? <a href="/login">Login here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
