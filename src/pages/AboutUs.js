import React from 'react';
import Header from '../components/Header';
import gallery2 from '../assets/gallery2.jpg';
import founderImg from '../assets/founder.JPG';
import teacherImg from '../assets/gallery1.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
    
      {/* Hero Section with Animation */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Redefining Math Education Since 2013</h1>
          <p className="hero-subtitle">
            Empowering 600+ educators to transform learning for 50,000+ students across India
          </p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Story Timeline */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3>Founded with a Vision</h3>
                <p>Shraddha Institute began with a single center in Gurgaon, aiming to revolutionize math education through Vedic techniques.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>First 100 Teachers Trained</h3>
                <p>Our certification program gained recognition for producing exceptional math educators.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>National Expansion</h3>
                <p>Established presence in 15+ cities with 50+ partner schools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>600+ Educators Empowered</h3>
                <p>Now impacting thousands of students annually with our proven methodology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-card">
            <div className="founder-image">
              <img src={founderImg} alt="Mrs. Shraddha Sharma, Founder" />
              <div className="founder-quote">
                "Math should be joyful, not fearful"
              </div>
            </div>
            <div className="founder-message">
              <h2>Message From Our Founder</h2>
              <p>
                As an educator and the founder of shraddha Institute, I deeply understand the challenges schools face in fostering student sucess and shaping a future-ready generation.
                When I started Shraddha Institute in 2013, I saw bright students struggling with math anxiety. 
                Our ancient Vedic techniques combined with modern pedagogy created a breakthrough. 
                Today, I'm proud that our 600+ certified teachers are making math magical for students across India.
              </p>
              <p className="signature">- Mrs. Swati Shah</p>
              <div className="founder-credentials">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Showcase */}
      <section className="methodology-section">
        <div className="container">
          <h2 className="section-title"> Academic Excellence</h2>
          <div className="methodology-grid">
            <div className="method-card">
              <div className="method-icon">🧮</div>
              <h3>Vedic Techniques</h3>
              <p>Ancient calculation methods that make math intuitive and fast</p>
            </div>
            <div className="method-card">
              <div className="method-icon">🧠</div>
              <h3>Cognitive Development</h3>
              <p>Programs designed to enhance mental agility and problem-solving</p>
            </div>
            <div className="method-card">
              <div className="method-icon">👩‍🏫</div>
              <h3>Teacher Excellence</h3>
              <p>Rigorous 120-hour certification program</p>
            </div>
            <div className="method-card">
              <div className="method-icon">📈</div>
              <h3>Proven Results</h3>
              <p>92% of students show measurable improvement within 3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training Highlight */}
      <section className="training-section">
        <div className="container">
          <div className="training-content">
            <div className="training-text">
              <h2>Transformational Teacher Training</h2>
              <p>
                Our 120-hour intensive program transforms educators into master trainers. 
                Graduates receive:
              </p>
              <ul>
                <li> certification</li>
                <li>Complete teaching toolkit</li>
                <li>Ongoing mentorship</li>
                <li>Access to our educator community</li>
              </ul>
              <button className="cta-button">Learn About Training</button>
            </div>
            <div className="training-image">
              <img src={teacherImg} alt="Teacher training session" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Transforming Education</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">600+</div>
              <div className="stat-label">Certified Educators</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Schools</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Students Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Math Education?</h2>
          <p>Join our network of educators or bring our programs to your school</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Become a Certified Trainer</button>
            <button className="cta-button secondary">Partner With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;