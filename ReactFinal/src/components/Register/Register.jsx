import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  //const navigate = useNavigate(); //  Define navigate
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5014/Register", formData);
  //     alert(response.data);
  //     // window.location.href = "/";
  //     navigate("/Welcome");
  //   } 
  //   catch (error) {
  //     console.error("Error registering user:", error);
  //     alert("Registration failed");
  //     //alert(error.response?.data || "Registration failed");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5014/Register", formData);
      if (response.status === 200) {
        alert("Registration successfu");
        navigate("/Welcome");
        
      } else {
        alert("Registration failed");
      }
      
    } 
    catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed");
    }
  };
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
        <form onSubmit={handleSubmit}>
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
              value={formData.username}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
