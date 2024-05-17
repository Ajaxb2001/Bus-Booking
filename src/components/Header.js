import { NavLink } from "react-router-dom";
import "../CSS/Header.css";
import logoImage from "../Images/icons8-double-decker-bus-94.png"; // Update the import path to where your image is located

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img
              src={logoImage}
              alt="Travel Agency Logo"
              className="logo-icon"
            />
          </NavLink>
          <div className="logo-name">Tulip Travels</div>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/mybookings">My Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
