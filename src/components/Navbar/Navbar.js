import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbarr = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="side">
          <h1>
            <img src={logo} alt="Logo" />
          </h1>
        </div>
        <h1>PLYPICKER</h1>
        <div className="centered-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a Service or Product"
              className="search-bar"
            />
          </div>
          <div className="person-icon" onClick={toggleDropdown}></div>
          {showDropdown && (
            <div className="dropdown">
              <p>Profile</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
