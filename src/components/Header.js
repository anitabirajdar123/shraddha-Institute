import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-orange text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Shraddha Institute</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#programs">Programs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#franchise">Franchise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#training">Training</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#demo">Free Demo</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
