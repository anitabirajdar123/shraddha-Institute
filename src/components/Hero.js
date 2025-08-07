import React from 'react';
import Lottie from 'lottie-react';
import studentAnim from '../assets/lottie/education.json';
import Abacus1 from '../assets/icons/abacus.png';
import Abacus2 from '../assets/icons/Abacus.jpg';
import Brain from '../assets/icons/brain.png';

import './Hero.css';

const icons = [Abacus1, Abacus2, Brain];

const Hero = () => {
  return (
    <section className="hero-slider-section position-relative overflow-hidden" id="hero">
      {/* Floating Image Icons */}
      <div className="floating-icons">
        {Array.from({ length: 30 }).map((_, i) => {
          const icon = icons[i % icons.length];
          return (
            <img
              key={i}
              src={icon}
              alt=""
              className="floating-icon"
              style={{
                left: `${Math.random() * 100}%`,
                '--i': i,
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0" data-aos="fade-right">
            <h1 className="hero-title mb-3">
              Empowering <span className="highlight-orange">Young Minds</span><br />
              and <span className="highlight-orange">Teachers</span> Together
            </h1>
            <p className="lead mb-4">
              Discover how Shraddha Institute builds brighter futures with <strong>Abacus</strong> & <strong>Vedic Math</strong>.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-orange">Join Now 🚀</a>
              <a href="#demo" className="btn btn-outline-orange">Free Demo 🎓</a>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center" data-aos="zoom-in">
            <Lottie animationData={studentAnim} loop className="hero-lottie" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;