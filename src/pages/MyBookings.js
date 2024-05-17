import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/MyBookings.css"; // Make sure the path to your CSS file is correct

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Replace with the actual endpoint to fetch user's bookings
        const response = await axios.get("/api/bookings/mybookings");
        setBookings(response.data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching bookings.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (isLoading) {
    return (
      <div className="my-bookings-container">
        <h1 className="my-bookings-title">My Bookings</h1>
        <p className="my-bookings-loading">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-bookings-container">
        <h1 className="my-bookings-title">My Bookings</h1>
        <p className="my-bookings-error">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="my-bookings-container">
      <h1 className="my-bookings-title">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="my-bookings-no-bookings">You have no bookings.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="booking-item">
              <div className="booking-detail">Booking ID: {booking.id}</div>
              <div className="booking-detail">Date: {booking.date}</div>
              <div className="booking-detail">
                Destination: {booking.destination}
              </div>
              {/* Add more details as necessary */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyBookings;
