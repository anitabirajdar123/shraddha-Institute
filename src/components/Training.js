import React, { useEffect } from 'react';
import './Training.css';
import trainingIllustration from '../assets/training-illustration.svg';

const Training = () => {
  useEffect(() => {
    const animateElements = [
      { selector: '.title-section', animation: 'fadeInDown' },
      { selector: '.section-label', animation: 'fadeInLeft' },
      { selector: 'h2', animation: 'fadeInLeft' },
      { selector: '.lead-text', animation: 'fadeIn' },
      { selector: '.benefit-card', animation: 'fadeInUp' },
      { selector: '.illustration-img', animation: 'fadeInRight' }
    ];

    animateElements.forEach((el, index) => {
      const element = document.querySelector(el.selector);
      if (element) {
        element.style.animation = `${el.animation} 0.8s ease-out ${index * 0.1 + 0.3}s forwards`;
        element.style.opacity = '0';
      }
    });
  }, []);

  return (
    <div className="training-page">
      <section className="training-section" id="training">
        <div className="container">
          <div className="title-section">
            <div className="title-content">
              <h1>Shraddha Institute Teacher Training</h1>
              <p className="subtitle">Become a Certified Abacus & Vedic Math Instructor</p>
              <div className="title-decoration">
                <div className="orange-line"></div>
              </div>
            </div>
          </div>

          <div className="training-content-wrapper">
            <div className="training-text">
              <div className="section-label">Professional Development</div>
              <h2>
                <span className="orange-text">Abacus & Vedic Math</span>
                <br />
                Teacher Certification Program
              </h2>
              <p className="lead-text">
                Elevate your teaching skills with our <strong>Comprehensive Abacus & Vedic Math Certification</strong> program designed specifically for educators.
              </p>
              
              <div className="benefits-grid">
                {[
                  { icon: '🧮', title: 'Abacus', desc: 'Complete 8 Levels techniques' },
                  { icon: '🔢', title: 'Vedic Math', desc: '8 core formulas & applications' },
                  { icon: '👩‍🏫', title: 'Pedagogy Training', desc: 'Effective teaching methodologies' },
                  { icon: '🏫', title: 'Center Support', desc: 'Launch your own training center' }
                ].map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="training-illustration">
              <img 
                src={trainingIllustration} 
                alt="Abacus and Vedic Math Training Illustration"
                className="illustration-img"
              />
              <div className="floating-badge">
                <span className="badge-number">600+</span>
                <span className="badge-text">Certified Instructors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;