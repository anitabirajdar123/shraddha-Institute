import React, { useEffect } from 'react';
import './TrainingPage.css';

const TrainingPage = () => {
  useEffect(() => {
    const animateElements = [
      { selector: '.page-header', animation: 'fadeInDown' },
      { selector: '.perspective-header', animation: 'fadeInLeft' },
      { selector: '.training-section', animation: 'fadeInUp' },
      { selector: '.benefit-card', animation: 'fadeInUp' }
    ];

    animateElements.forEach((el, index) => {
      const element = document.querySelector(el.selector);
      if (element) {
        element.style.animation = `${el.animation} 0.8s ease-out ${index * 0.2 + 0.3}s forwards`;
        element.style.opacity = '0';
      }
    });
  }, []);

  const teacherTraining = {
    title: "For Teachers & Individuals",
    description: "Become a certified instructor and start your own teaching center",
    benefits: [
      "Government recognized certification",
      "120-hour comprehensive training",
      "Placement assistance",
      "Franchise opportunity",
      "Ongoing professional development"
    ],
    levels: [
      {
        name: "Foundation Level",
        duration: "2 weeks",
        skills: ["Abacus fundamentals", "Basic Vedic Math", "Teaching methodology"]
      },
      {
        name: "Advanced Level",
        duration: "3 weeks", 
        skills: ["Mental math techniques", "Classroom management", "Student assessment"]
      },
      {
        name: "Master Trainer",
        duration: "4 weeks",
        skills: ["Curriculum design", "Teacher training", "Business development"]
      }
    ]
  };

  const schoolTraining = {
    title: "For Schools & Institutions",
    description: "Enhance your math curriculum with our certified programs",
    benefits: [
      "Teacher certification for your staff",
      "Ready-to-use curriculum",
      "Quality assurance",
      "Student certification",
      "Marketing support"
    ],
    programs: [
      {
        name: "Teacher Certification",
        details: "Train your existing math teachers"
      },
      {
        name: "After-School Program",
        details: "We provide certified instructors"
      },
      {
        name: "Curriculum Licensing",
        details: "Use our materials with your branding"
      }
    ]
  };

  return (
    <main className="training-page-container">
      {/* Hero Header */}
      <header className="page-header">
        <div className="header-content">
          <h1>Professional Training Programs</h1>
          <p className="header-subtitle">
            Specialized training solutions for teachers and schools
          </p>
          <div className="header-decoration-line"></div>
        </div>
      </header>

      {/* Teacher Training Section */}
      <section className="training-section teacher-perspective">
        <div className="training-content">
          <h2 className="perspective-header">{teacherTraining.title}</h2>
          <p className="perspective-description">{teacherTraining.description}</p>
          
          <div className="benefits-container">
            <h3>Key Benefits</h3>
            <div className="benefits-grid">
              {teacherTraining.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="levels-container">
            <h3>Certification Levels</h3>
            <div className="levels-grid">
              {teacherTraining.levels.map((level, index) => (
                <div key={index} className="level-card">
                  <h4>{level.name}</h4>
                  <p className="duration">{level.duration}</p>
                  <ul>
                    {level.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <button className="cta-button">Enroll as Teacher</button>
        </div>

        <div className="stats-overlay">
          <div className="stat-card">
            <span className="stat-number">600+</span>
            <span className="stat-label">Teachers Certified</span>
          </div>
        </div>
      </section>

      {/* School Training Section */}
      <section className="training-section school-perspective">
        <div className="training-content">
          <h2 className="perspective-header">{schoolTraining.title}</h2>
          <p className="perspective-description">{schoolTraining.description}</p>
          
          <div className="benefits-container">
            <h3>Partnership Benefits</h3>
            <div className="benefits-grid">
              {schoolTraining.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="programs-container">
            <h3>Available Programs</h3>
            <div className="programs-grid">
              {schoolTraining.programs.map((program, index) => (
                <div key={index} className="program-card">
                  <h4>{program.name}</h4>
                  <p>{program.details}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="cta-button">Partner as School</button>
        </div>

        <div className="stats-overlay">
          <div className="stat-card">
            <span className="stat-number">120+</span>
            <span className="stat-label">School Partners</span>
          </div>
        </div>
      </section>

      {/* Certification Badge */}
      <div className="certification-badge-container">
        <div className="certification-icon">🏆</div>
        <div className="badge-text">
          <h3>Recognized Certification</h3>
          <p>Our programs are accredited by the International Math Education Council</p>
        </div>
      </div>
    </main>
  );
};

export default TrainingPage;