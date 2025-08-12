import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import logo from '../assets/backgrounds/logo3.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Announcement Bar */}
      <div className="announcement-bar bg-primary text-white py-2 text-center">
        <div className="container">
          <p className="mb-0 announcement-text">
            <strong>🌟 Join Shraddha Institute Today! </strong> 
            Master Abacus & Vedic Math with our expert programs
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled shadow-sm' : 'navbar-light bg-white'} py-2 py-lg-1`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <div className="logo-container d-flex align-items-center">
              <img 
                src={logo} 
                alt="Shraddha Institute Logo" 
                className="main-logo"
              />
             
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="programsDropdown" role="button" 
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Programs
                </a>
                <ul className="dropdown-menu" aria-labelledby="programsDropdown">
                  <li><Link to="/programs/abacus" className="dropdown-item" onClick={() => setIsOpen(false)}>Abacus</Link></li>
                  <li><Link to="/programs/vedic-math" className="dropdown-item" onClick={() => setIsOpen(false)}>Vedic Math</Link></li>
                  <li><Link to="/programs/brain-development" className="dropdown-item" onClick={() => setIsOpen(false)}>DMIT</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/franchise" className="nav-link" onClick={() => setIsOpen(false)}>Franchise</Link>
              </li>
              <li className="nav-item">
                <Link to="/training" className="nav-link" onClick={() => setIsOpen(false)}>Training</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>
            
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <Link to="/free-demo" className="btn btn-outline-primary btn-sm me-2 px-3">Free Demo</Link>
              <Link to="/join-now" className="btn btn-primary btn-sm px-3">Join Now</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;