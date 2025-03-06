import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check authentication status when component mounts
  //   const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   const storedUsername = localStorage.getItem('username');
  //   setIsLoggedIn(loggedIn);
  //   setUsername(storedUsername || '');
  // }, []);
  useEffect(() => {
    // Check authentication status when component mounts
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');
    
    if (!loggedIn) {
      navigate('/login');
      return;
    }
    
    setIsLoggedIn(loggedIn);
    setUsername(storedUsername || '');
  }, [navigate]);

  const handleLogout = () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    // Only proceed with logout if user confirms
    if (confirmLogout) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      setIsLoggedIn(false);
      setUsername('');
      navigate('/login');
    }
  };
  // If not logged in, don't render anything
  if (!isLoggedIn) {
    return null;
  }
  //
  return (
    <div>
      {/* Add user status section */}
      <nav className="user-nav">
        {isLoggedIn ? (
          <div className="user-info">
            <span>Welcome, {username}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="auth-buttons">
            {/* <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link> */}
             {navigate('/login')}
          </div>
        )}
      </nav>
      {isLoggedIn && (
        <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Find and Purchase Your Perfect Plants</h1>
          <p>
            Explore, select, and shop for a wide variety of plants effortlessly with our user-friendly catalog and secure purchasing system.
          </p>
          <Link to="/container" className="btn">View Plant Container</Link>
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
                Explore a wide variety of plants, including home decorative plants and economical options, with easy browsing and purchasing options.
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-database fa-3x"></i>
              <h3>Data Management</h3>
              <p>
                Get expert advice on plant care and maintenance through an integrated support system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Preview Section */}
      <section id="inventory" className="inventory-preview">
        <div className="container">
          <h2 className="section-title">Your Shopping Cart</h2>
          <p>Review, update, or proceed to checkout with the plants you've selected for purchase.</p>
          <Link to="/container" className="btn">Checkout</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p>Have questions or suggestions? We'd love to hear from you.</p>
          <a href="mailto:support@plantinventory.com" className="btn">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Plant Inventory. All Rights Reserved.</p>
        </div>
      </footer>
      </>
      )}
    </div>
  );
};

export default Welcome;
