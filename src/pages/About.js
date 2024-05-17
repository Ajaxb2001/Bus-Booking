import React from "react";
import "../CSS/About.css"; // Make sure the path to your CSS file is correct

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our Bus Booking App! Our mission is to make bus travel
          easy, convenient, and accessible to everyone. With our user-friendly
          platform, you can book your bus tickets in just a few clicks. We are
          dedicated to providing a seamless travel experience by offering a wide
          selection of routes, competitive prices, and excellent customer
          service. Thank you for choosing us for your travel needs!
        </p>
      </div>
    </div>
  );
}

export default About;
