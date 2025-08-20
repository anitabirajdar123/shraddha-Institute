import React from 'react';
import './FounderPage.css';
import founderImg from '../../assets/founder1.JPG';

function FounderPage() {
  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <div className="hero-content">
          <h1>Our Journey</h1>
          <p>How it all started in 2013 and scaled across India</p>
        </div>
      </section>

      {/* Timeline Section */}
      {/* Timeline Section */}
<section className="timeline-section">
  <div className="container">
    <h2 className="section-title">Our Journey</h2>
    
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">2013</div>
        <div className="timeline-content">
          <h3>Founded with a Vision</h3>
          <p>Shraddha Institute began with a single center in Solapur.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">2015</div>
        <div className="timeline-content">
          <h3>First Milestone</h3>
          <p>Trained our first 100 educators and expanded to nearby districts.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">2018</div>
        <div className="timeline-content">
          <h3>Crossed 10,000 Students</h3>
          <p>Our Abacus and Vedic Maths programs reached major schools.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">2020</div>
        <div className="timeline-content">
          <h3>National Expansion</h3>
          <p>Presence in 15+ cities with 600+ educators trained.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">2023</div>
        <div className="timeline-content">
          <h3>50,000+ Students Impacted</h3>
          <p>Recognized as one of India’s fastest-growing Abacus & Vedic Maths institutes.</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">2025</div>
        <div className="timeline-content">
          <h3>National Level Competitions</h3>
          <p>Empowering students through state & national events with 5000+ participants.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Founder Profile */}
      <section className="founder-profile">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image">
              <img src={founderImg} alt="Mrs. Swati Shah, Founder" />
              <div className="quote">"Math should be joyful, not fearful"</div>
            </div>
            
            <div className="profile-content">
              <h3>Message From Our Founder</h3>
              <p>
                I saw students struggling with math anxiety. Vedic techniques helped us
                bring joy back into learning. Today, with over 600 teachers and 50,000+ students,
                our mission continues.
              </p>
              <div className="signature">- Mrs. Swati Shah</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FounderPage;