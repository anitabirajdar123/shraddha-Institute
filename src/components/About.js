import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './About.css';

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

const About = () => (
  <section className="about-section-bg" id="about">
    <div className="about-wrapper">
      <h2 className="section-title">About Us</h2>

      <div className="about-row">
        {/* Mission & Vision */}
        <div className="about-col mission-vision-col animate-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="mission-vision-title">🌱 Mission & Vision</h3>
          <div className="mission-vision-list">
            {missionVisionLines.map((line, i) => (
              <p
                key={i}
                className="mission-vision-line fade-in-sequential vision-bubble"
                style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
              >
                <FaCheckCircle className="check-icon" />
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Our Impact */}
        <div className="about-col info-col animate-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="info-title">Our Impact</h3>
          <div className="info-list">
            {infoLines.map((line, i) => (
              <p
                key={i}
                className="info-line fade-in-sequential"
                style={{ animationDelay: `${i * 0.3 + 1}s` }}
              >
                <FaCheckCircle className="check-icon" />
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
