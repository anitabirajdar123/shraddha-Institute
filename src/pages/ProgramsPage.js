// ProgramsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPage.css';

import abacusImg from '../assets/abacus.webp';
import vedicImg from '../assets/vedic.png';
import teacherImg from '../assets/teacher.png';
import phonicsImg from '../assets/phonix.jpg';

const ProgramsPage = () => {
  const courses = [
    {
      id: 'abacus',
      title: 'Abacus Program',
      image: abacusImg,
      description: 'An engaging approach to arithmetic using visual tools that build speed and confidence.',
      studentBenefits: [
        'Enhances memory and concentration',
        'Improves calculation speed',
        'Boosts academic performance',
        'Reduces anxiety around math'
      ],
      teacherBenefits: [
        'Comprehensive training resources',
        'Nationally recognized certification',
        'Structured lesson plans',
        'Ongoing support and mentorship'
      ],
      ageGroup: 'For children (4–14 years)',
      duration: 'Daily sessions for 12–18 months'
    },
    {
      id: 'vedic',
      title: 'Vedic Mathematics',
      image: vedicImg,
      description: 'Master mental math using time-tested techniques from ancient Indian mathematics.',
      studentBenefits: [
        'Solve complex problems quickly',
        'Sharpen logical thinking',
        'Excel in competitive exams',
        'Improve board exam results'
      ],
      teacherBenefits: [
        'Easy-to-teach methods',
        'Printable worksheets',
        'Modern presentation of traditional techniques',
        'Access to training community'
      ],
      ageGroup: 'Teens and adults (13+ years)',
      duration: '6–9 months, twice a week'
    },
    {
      id: 'teacher',
      title: 'Teacher Training Program',
      image: teacherImg,
      description: 'Gain the skills, certification, and support needed to start a fulfilling career in education.',
      studentBenefits: [
        '40 hours of hands-on training',
        'Recognized certificate upon completion',
        'Job placement assistance',
        'Online and offline teaching opportunities'
      ],
      ageGroup: 'Aspiring educators (18+ years)',
      duration: '6 weeks (flexible schedule)'
    },
    {
      id: 'phonics',
      title: 'Phonics Program',
      image: phonicsImg,
      description: 'Build strong reading skills in young learners with a proven phonics-based approach.',
      studentBenefits: [
        'Understand letter sounds easily',
        'Improve reading and spelling',
        'Enhance pronunciation',
        'Gain reading confidence'
      ],
      teacherBenefits: [
        'Step-by-step teaching modules',
        'Interactive learning materials',
        'Complete phonics toolkit',
        'Progress tracking features'
      ],
      ageGroup: 'Young learners (4–8 years)',
      duration: '9–12 months of playful sessions'
    },
  ];

  return (
    <div className="programs-page">

      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1>Explore Our Educational Programs</h1>
          <p>Empowering students to succeed and educators to thrive through practical, engaging courses.</p>
        </div>
      </section>

      {/* Guide Section */}
      <section className="simple-guide">
        <div className="container">
          <h2>Find the Right Program for You</h2>
          <div className="guide-steps">
            <div className="step">
              <div className="step-number">1</div>
              <p><strong>Young child struggling with math?</strong> Start with <strong>Abacus</strong>.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p><strong>Preparing for exams or competitive tests?</strong> Choose <strong>Vedic Math</strong>.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <p><strong>Want to teach?</strong> Begin with our <strong>Teacher Training</strong> program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="course-details">
        <div className="container">
          {courses.map(course => (
            <div key={course.id} id={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={`${course.title} illustration`} />
                <div className="age-duration">
                  <span>{course.ageGroup}</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="course-content">
                <h2>{course.title}</h2>
                <p className="course-description">{course.description}</p>

                <div className="benefits-section">
                  <div className="benefits-column">
                    <h3>For Students</h3>
                    <ul className="benefits-list">
                      {(course.studentBenefits).map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  {course.teacherBenefits && (
                    <div className="benefits-column">
                      <h3>For Teachers</h3>
                      <ul className="benefits-list">
                        {course.teacherBenefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="action-buttons">
                  <Link to="/contact" className="enquiry-btn">
                    {course.id === 'teacher' ? 'Join Training' : 'Enquire Now'}
                  </Link>
                  <Link to="/free-demo" className="demo-btn">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
