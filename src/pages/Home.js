// Home.js
import React from "react";
import SearchCard from "./SearchCard";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="parallax">
     <div className="bus-name"> <h1>Welcome to the Bus Booking Platform</h1> </div>
      <div className="search-card-container">
        <SearchCard /> {/* Existing SearchCard component */}
      </div>
      {/* Include any other content for the Home page here */}
    </div>
  );
};

export default Home;
