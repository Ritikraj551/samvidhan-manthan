import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo on the Left */}
      <img src="/images/logo.png" alt="Website Logo" className="navbar-logo" />

      {/* Navbar Links on the Right */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="#">Samvidhan Pariksha</Link>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/quiz">Quiz Game</Link>
              </li>
              <li>
                <Link to="/roleplay">Roleplaying Game</Link>
              </li>
              <li>
                <Link to="/puzzle">Puzzle Game</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/login">Login/Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
