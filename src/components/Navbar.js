// src/components/Navbar.js
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import './Navbar.css'; // optional external CSS

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="top-bar">
        <span><FaPhoneAlt /> +91-98 995 11 178</span>
        <span><FaMapMarkerAlt /> solapur </span>
        <span><FaClock /> Opening Time: 10:00am-7:00pm </span>
      </div>

      <div className="navbar-main">
        
        <h1 className="brand-title">Shraddha institute </h1>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Teachers</a>
          <a href="#">Videos</a>
          <a href="#">Our Gallery</a>
          <a href="#">Contact Us</a>
          <a href="#" className="demo-btn">Free Demo</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
