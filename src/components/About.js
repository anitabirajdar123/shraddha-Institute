import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [impactRef, impactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const missionVisionLines = [
    "To empower young minds through innovative teaching and comprehensive learning experiences.",
    "To foster critical thinking and creativity among students, preparing them for future challenges.",
    "To cultivate an inclusive and nurturing environment for both students and educators.",
  ];

  const infoLines = [
    "Proud Partners with 50+ Schools",
    "Facilitated 500+ Impactful Workshops across 20+ Cities",
    "Empowered 15,000+ Students through Transformative Educational Programs",
  ];

  return (
    <section className="about-section-bg" id="about">
      <div className="about-wrapper">
        <h2 className="section-title2 animate-fade-in">About ShraddhaInstitute</h2>
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Our Mission & Vision
        </p>

        <div className="about-row">
          {/* Mission & Vision - Left Side */}
          <div 
            ref={missionRef}
            className={`about-col mission-col ${missionInView ? 'animate-slide-in-left' : ''}`}
          >
            <ul className="mission-vision-list">
              {missionVisionLines.map((line, i) => (
                <li 
                  key={i} 
                  className="mission-vision-line"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <FaCheckCircle className="check-icon" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Impact - Right Side */}
          <div 
            ref={impactRef}
            className={`about-col impact-col ${impactInView ? 'animate-slide-in-right' : ''}`}
          >
            <h3 className="impact-title">Our Impact</h3>
            <ul className="impact-list">
              {infoLines.map((line, i) => (
                <li 
                  key={i} 
                  className="impact-line"
                  style={{ transitionDelay: `${i * 0.15 + 0.3}s` }}
                >
                  <FaCheckCircle className="check-icon" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;