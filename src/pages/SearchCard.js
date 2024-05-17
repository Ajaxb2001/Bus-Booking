import React, { useState } from "react";
import "../CSS/SearchCard.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const cities = [
  { id: 1, name: "Pune" },
  { id: 2, name: "Kolhapur" },
  { id: 3, name: "Belgavi" },
  { id: 4, name: "Bengaluru" },
];
// BusCard component (inside SearchCard.js, above the SearchCard component)
const BusCard = ({ bus }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    // Retrieve existing bookings from localStorage or initialize an empty array
    let existingBookings = JSON.parse(localStorage.getItem("myBookings")) || [];

    // Add the new booking to the array
    existingBookings.push(bus);

    // Save the updated bookings back to localStorage
    localStorage.setItem("myBookings", JSON.stringify(existingBookings));

    // Navigate to the MyBookings page
    navigate("/mybookings");
  };
  return (
    <div className="bus-card">
      <div className="bus-card-header">
        <h3 className="bus-name">{bus.name}</h3>
      </div>
      <div className="bus-card-body">
        <div className="bus-info">
          <p>
            <strong>Departure:</strong> {bus.departureTime}
          </p>
          <p>
            <strong>Arrival:</strong> {bus.arrivalTime}
          </p>
          <p className="bus-price">
            <strong>Price:</strong> ₹{bus.price}
          </p>
        </div>
        <button className="book-button" onClick={handleBookingClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

function SearchCard() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // This function simulates an API call to fetch bus data
  const fetchBuses = async () => {
    // Simulate a delay for the API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        id: 1,
        name: "Bus 1",
        departureTime: "08:00 AM",
        arrivalTime: "12:00 PM",
        price: 25,
      },
      {
        id: 2,
        name: "Bus 2",
        departureTime: "09:00 AM",
        arrivalTime: "01:00 PM",
        price: 30,
      },
      {
        id: 3,
        name: "Bus 3",
        departureTime: "10:00 AM",
        arrivalTime: "02:00 PM",
        price: 22,
      },
      {
        id: 4,
        name: "Bus 4",
        departureTime: "11:00 AM",
        arrivalTime: "03:00 PM",
        price: 28,
      },
    ];
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setBuses([]);

    try {
      const data = await fetchBuses();
      setBuses(data); // Assume the data is the array of buses
    } catch (error) {
      setError("Failed to fetch buses: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toCityOptions = cities.filter((city) => city.name !== fromCity);
  return (
    <div>
      <div className="search-container">
        <div className="search-card">
          <form onSubmit={handleSearch}>
            {/* From City */}
            <div className="form-group">
              <label htmlFor="fromCity">From City</label>
              <select
                id="fromCity"
                value={fromCity}
                onChange={(e) => {
                  setFromCity(e.target.value);
                  setToCity(""); // Reset toCity when fromCity changes
                }}
              >
                <option value="">Select city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* To City */}
            <div className="form-group">
              <label htmlFor="toCity">To City</label>
              <select
                id="toCity"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                disabled={!fromCity} // Disable until fromCity is selected
              >
                <option value="">Select city</option>
                {toCityOptions.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Departure Date */}
            <div className="form-group">
              <label htmlFor="departureDate">Departure Date</label>
              <input
                type="date"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            {/* Search Buses Button */}
            <button type="submit" className="search-button">
              Search Buses
            </button>
          </form>
        </div>
        ;{isLoading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {/* Bus List */}
        <div className="bus-list">
          {buses.map((bus) => (
            <BusCard key={bus.id} bus={bus} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
