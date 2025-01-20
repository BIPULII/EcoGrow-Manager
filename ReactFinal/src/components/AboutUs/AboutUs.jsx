import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      {/* <header className="navbar">
        <div className="container">
          <h1 className="logo">Plant Inventory</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="AboutUs">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="plantwiki">Plant WIKI</a></li>
              <li><a href="Container">Plant Container</a></li>
              <li><a href="Inventry">Inventory</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
      <div className="about-section">
        <div className="image-section">
          <img
            src="/src/assets/logo.png"
            alt="Plants in the dark theme"
          />
        </div>
        <div className="content-section">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Plant Inventory</strong>, your trusted source for
            quality plants that bring life and elegance to your spaces.
            Whether you're looking for <strong>commercial-use plants</strong> to
            boost productivity and aesthetics or <strong>decorative plants</strong> to
            enhance your home or office, we've got you covered.
          </p>
          <p>
            Our <strong>Plant Wiki</strong> feature offers an extensive library
            of plant information, helping you make informed decisions about
            care, maintenance, and benefits of different species.
          </p>
          <p>
            At Plant Inventory, we are committed to creating an easy and
            enjoyable shopping experience while contributing to a greener
            planet. Join us on this journey of nurturing nature and celebrating
            its beauty.
          </p>
        </div>
      </div>
      

   
    </div>
  );
};

export default AboutUs;
