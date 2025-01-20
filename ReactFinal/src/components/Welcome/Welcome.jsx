import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <header className="navbar">
        <div className="container">
          <div className="logo">
            <span>Plant Inventory</span>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#inventory">Inventory</a></li>
              <li><a href="#contact">Contact</a></li>
              
              <li><a href="plantwiki">Plant WIKI</a></li>
              <li><a href="Container">Plant Container</a></li>
              <li><a href="Inventry">Inventory</a></li>
              <li><a href="AboutUs">About Us</a></li>

            </ul>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Find and Purchase Your Perfect Plants</h1>
          <p>
          Explore, select, and shop for a wide variety of plants effortlessly with our user-friendly catalog and secure purchasing system.
          </p>
          <a href="Container" className="btn">View Plant Container</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-chart-line fa-3x"></i>
              <h3>Plant Wiki</h3>
              <p>
              Access detailed information about each plant, including care instructions, benefits, and interesting facts to help you make informed choices.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-seedling fa-3x"></i>
              <h3>Seamless Shopping Experience</h3>
              <p>
              Explore a wide variety of plants, including home decorative plants and economical options, with easy browsing and purchasing options. </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-database fa-3x"></i>
              <h3>Data Management</h3>
              <p>
              Get expert advice on plant care and maintenance through an integrated support system.  </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inventory Preview Section --> */}
    <section id="inventory" class="inventory-preview">
      <div class="container">
        <h2 class="section-title">Your Shopping Cart</h2>
        <p>Review, update, or proceed to checkout with the plants you've selected for purchase.</p>
        <a href="Container" class="btn">Checkout</a>
        
      </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p>Have questions or suggestions? We'd love to hear from you.</p>
        <a href="mailto:support@plantinventory.com" class="btn">Contact Us</a>
      </div>
    </section>

    {/* <!-- Footer --> */}
    <footer>
      <div class="container">
        <p>&copy; 2024 Plant Inventory. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Welcome;
