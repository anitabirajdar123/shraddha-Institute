import React from 'react';
import Lottie from 'lottie-react';
import educationAnim from '../assets/lottie/education.json';
import './Hero.css';
import heroBg from '../assets/gallery1.jpg'; // Make sure image filename is descriptive

const Hero = () => {
  return (
    <header className="hero-section" id="hero" role="banner">
      {/* Static Background Image with lazy loading */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
        loading="lazy"
      ></div>
      
      {/* Gradient Overlay */}
      <div className="hero-gradient-overlay" aria-hidden="true"></div>
      
      {/* Main Content */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0" data-aos="fade-right" itemScope itemType="https://schema.org/EducationalOrganization">
            <h1 className="hero-title mb-3" itemProp="name">
              <span className="text-white">Elevate Your Teaching with</span><br />
              <span className="text-orange">Master Abacus and Vedic Math Certification</span>
            </h1>
            <p className="hero-subtitle mb-4" itemProp="description">
              Transform into a <strong>sought-after mental math instructor</strong> through our prestigious training program
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
              <a href="#teacher-training" className="btn btn-orange btn-lg" aria-label="Enroll in teacher training program">
                Enroll Now <span aria-hidden="true">→</span>
              </a>
              <a href="#demo" className="btn btn-outline-white btn-lg" aria-label="Sign up for free demo class">
                Free Demo
              </a>
            </div>
            
            {/* Trust indicators with structured data */}
            <div className="trust-badges mt-4" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <meta itemProp="ratingValue" content="4.9" />
              <meta itemProp="reviewCount" content="500" />
              <div className="d-flex align-items-center gap-3">
                <div className="trust-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-light" itemProp="reviewCount">700+ Certified Instructors</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in">
            <Lottie 
              animationData={educationAnim} 
              loop 
              className="hero-animation"
              aria-label="Animation showing abacus and vedic math education"
              role="img"
              alt="Abacus and Vedic Math education animation"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;