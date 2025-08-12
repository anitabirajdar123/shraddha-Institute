import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import educationAnim from '../assets/lottie/education.json';
import './Hero.css';

// Import your background images
import bg1 from '../assets/backgrounds/bg1.jpg';
import bg2 from '../assets/backgrounds/bg2.jpg';
import bg3 from '../assets/backgrounds/bg3.webp';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Background Image Slider */}
      <div className="hero-bg-slider" style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}></div>
      
      {/* Content Overlay */}
      <div className="hero-content-overlay"></div>
      
      {/* Main Content */}
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0" data-aos="fade-right">
            <h1 className="hero-title mb-3">
              <span className="highlight-orange">Master Abacus & Vedic Math</span><br />
              <span className="highlight-white">Become a Certified Instructor</span>
            </h1>
            <p className="hero-subtitle mb-4">
              Join India's premier <strong>teacher training institute</strong> for mental math excellence
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#teacher-training" className="btn btn-orange">Teacher Training 🎓</a>
              <a href="#student-programs" className="btn btn-white">Student Programs ✏️</a>
             
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in">
            <Lottie 
              animationData={educationAnim} 
              loop 
              className="hero-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;