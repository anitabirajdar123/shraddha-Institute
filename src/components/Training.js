import React from 'react';
import Lottie from 'lottie-react';
import trainingAnim from '../assets/lottie/training.json';
import './Training.css';
import trainingIllustration from '../assets/training-illustration.svg';


const Training = () => {
  return (
    <section className="training-section" id="training">
      <div className="container">
        <div className="training-content-wrapper">
          <div className="training-text" data-aos="fade-right">
            <div className="section-label">Professional Development</div>
            <h2>
              <span className="gradient-text">Teacher Training</span>
              <br />
              Certification Program
            </h2>
            <p className="lead-text">
              Elevate your teaching skills with our <strong>Comprehensive Abacus & Vedic Math Certification</strong> program designed specifically for educators.
            </p>
            
            <div className="benefits-grid compact-grid">
  <div className="benefit-card compact-card">
    <div className="benefit-icon">📚</div>
    <h4>Comprehensive Curriculum</h4>
    <p>All levels from beginner to advanced</p>
  </div>
  
  <div className="benefit-card compact-card">
    <div className="benefit-icon">🎓</div>
    <h4>Certification</h4>
    <p>Accredited program credentials</p>
  </div>
  
  <div className="benefit-card compact-card">
    <div className="benefit-icon">💻</div>
    <h4>Flexible Learning</h4>
    <p>Online, hybrid, or in-person</p>
  </div>
  
  <div className="benefit-card compact-card">
    <div className="benefit-icon">🤝</div>
    <h4>Ongoing Support</h4>
    <p>Resources & mentorship</p>
  </div>
</div>
            
            <button className="cta-button">
              Download Program Brochure
              <span className="arrow-icon">→</span>
            </button>
          </div>
          
          <div className="training-illustration-wrapper" data-aos="zoom-in">
            <img 
              src={trainingIllustration} 
              alt="Teacher Training Illustration"
              className="training-illustration"
            />
            <div className="floating-badge">
              <div className="badge-content">
                <span className="badge-number">100+</span>
                <span className="badge-text">Teachers Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;