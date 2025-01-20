import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left Side: Navigation Links */}
      <div className="navbar-left">
        <h1 className="navbar-logo">ROOTIFY</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/container">Container</Link>
          </li>
          <li>
            <Link to="/plantwiki">Plant Wiki</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>

      {/* Right Side: Profile */}
      <div className="navbar-right">
        {/* <Link to="/profile" className="profile-link">
          Profile
        </Link> */}
        <Link to="/register" className="profile-link">
          Register
        </Link>
        <Link to="/login" className="profile-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
