import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="announcement-bar bg-orange text-white py-2 text-center">
        <div className="container">
          <p className="mb-0 small">Empowering Young Minds and Teachers Together</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar-light bg-white'} py-2`}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
            <span className="text-orange">Shraddha</span>Institute
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#programs">PROGRAMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#franchise">FRANCHISE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#training">TRAINING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">GALLERY</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#contact-demo">CONTACT</a>
              </li>
            </ul>
            
            <div className="d-flex ms-lg-4">
              <a href="#demo" className="btn btn-outline-orange me-2">Free Demo</a>
              <a href="#join" className="btn btn-orange">Join Now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;