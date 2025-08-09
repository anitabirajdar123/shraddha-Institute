import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BookOpen, Award, Users, Check } from 'lucide-react';
import './Programs.css';

const Programs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title1">🎓 Our Programs</h2>
          <p className="section-subtitle">
            Explore learning paths designed to spark joy and confidence in math!
          </p>
        </div>

        <div className="row g-4">
          {/* Abacus Program */}
          <div className="col-lg-4" data-aos="fade-up">
            <div className="program-card">
              <div className="icon-circle">
                <BookOpen color="white" size={32} />
              </div>
              <h3>Abacus Program</h3>
              <p>
                Mental math mastery using colorful beads – perfect for kids aged 4–14.
              </p>
              <ul>
                <li><Check size={16} className="icon-check" /> 8 Fun Learning Levels</li>
                <li><Check size={16} className="icon-check" /> Online & Offline</li>
                <li><Check size={16} className="icon-check" /> Competitions & Games</li>
                <li><Check size={16} className="icon-check" /> Boosts Focus</li>
              </ul>
            </div>
          </div>

          {/* Vedic Math */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="program-card">
              <div className="icon-circle">
                <Award color="white" size={32} />
              </div>
              <h3>Vedic Math</h3>
              <p>
                Fast tricks from ancient India – ideal for exams & quick calculations.
              </p>
              <ul>
                <li><Check size={16} className="icon-check" /> 8 Learning Levels </li>
                <li><Check size={16} className="icon-check" /> Solve in Seconds</li>
                <li><Check size={16} className="icon-check" /> Great for Olympiads</li>
                <li><Check size={16} className="icon-check" /> Ages 13+</li>
              </ul>
            </div>
          </div>

          {/* Teacher Training */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="program-card">
              <div className="icon-circle">
                <Users color="white" size={32} />
              </div>
              <h3>Teacher Training</h3>
              <p>
                Fun, interactive program to train educators in abacus & Vedic math.
              </p>
              <ul>
                <li><Check size={16} className="icon-check" /> Certified in 40 Hours</li>
                <li><Check size={16} className="icon-check" /> Teaching Kits Included</li>
                <li><Check size={16} className="icon-check" /> Practice Sheets</li>
                <li><Check size={16} className="icon-check" /> Get Lifetime Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
