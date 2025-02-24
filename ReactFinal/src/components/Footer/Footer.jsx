import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leaves-container">
        {/* Animated Leaves */}
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
      <div className="footer-content">
        <p>&copy; 2025 Plant Inventory. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
