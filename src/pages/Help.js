import React from "react";
import "../CSS/Help.css"; // Make sure the path to your CSS file is correct

function Help() {
  // The latitude and longitude for Bengaluru
  const bengaluruLatitude = 12.9716;
  const bengaluruLongitude = 77.5946;

  // Construct the OpenStreetMap URL
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    bengaluruLongitude - 0.1
  }%2C${bengaluruLatitude - 0.05}%2C${bengaluruLongitude + 0.1}%2C${
    bengaluruLatitude + 0.05
  }&layer=mapnik&marker=${bengaluruLatitude}%2C${bengaluruLongitude}`;

  return (
    <div className="help-container">
      <div className="help-card">
        <h1 className="help-title">Help & Support</h1>
        <p>If you need help, please contact support@example.com.</p>
        <div className="contact-info">
          <div className="contact-section">
            <h2>Address</h2>
            <p>123 Main Street</p>
            <p>Bengaluru, KA, 560001</p>
            <iframe
              title="Bengaluru Map"
              className="map"
              frameBorder="0"
              src={openStreetMapUrl}
              allowFullScreen
            ></iframe>
          </div>
          {/* Additional contact sections can be added here */}
        </div>
      </div>
    </div>
  );
}

export default Help;
