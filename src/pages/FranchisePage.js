// src/pages/FranchisePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FranchisePage.css';

import franchiseHero from '../assets/gallery2.jpg';
import step1 from '../assets/programs/f11.webp';
import step2 from '../assets/programs/f2.webp';
import step3 from '../assets/programs/f3.webp';

const FranchisePage = () => {
  return (
    <Container className="franchise-page">
      {/* Hero Section */}
      <Row className="franchise-header-section py-5 align-items-center">
        <Col lg={6}>
          <h1 className="display-4 fw-bold franchise-heading">Become a Franchise Partner</h1>
          <p className="lead">
            Are you a teacher, educator, or school owner? Want to start your own education business?
            Partner with Shraddha Institute and launch a successful learning center in your city.
          </p>
          <button className="btn franchise-btn-orange btn-lg mt-3">Apply for Franchise</button>
        </Col>
        <Col lg={6}>
          <img
            src={franchiseHero}
            alt="Franchise opportunity"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Why Franchise With Us */}
      <Row className="franchise-benefits-section py-5">
        <Col>
          <h2 className="text-center mb-5 franchise-heading">Why Choose Shraddha Institute?</h2>
          <div className="franchise-benefits-grid1">
            <div className="franchise-benefit-card1 text-center">
              <h3>Low Investment, High Impact</h3>
              <p>Start with minimal capital and scale fast with our proven model.</p>
            </div>
            <div className="franchise-benefit-card1 text-center">
              <h3>Perfect for Teachers</h3>
              <p>We train educators to become successful business owners.</p>
            </div>
            <div className="franchise-benefit-card1 text-center">
              <h3>School Partnership Support</h3>
              <p>We guide you in connecting with local schools to expand reach and revenue.</p>
            </div>
            <div className="franchise-benefit-card1 text-center">
              <h3>Complete Setup Assistance</h3>
              <p>From location planning to student onboarding – we help at every step.</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Franchise Setup Process */}
      <Row className="franchise-process-section py-5 bg-light">
        <Col>
          <h2 className="text-center mb-5 franchise-heading">How to Get Started</h2>
          <div className="franchise-benefits-grid1">
            <div className="franchise-benefit-card1 text-center">
              <img src={step1} alt="Step 1" className="franchise-benefit-icon" />
              <h4>1. Submit Application</h4>
              <p>Tell us about yourself and your city. We'll get in touch for the next steps.</p>
            </div>
            <div className="franchise-benefit-card1 text-center">
              <img src={step2} alt="Step 2" className="franchise-benefit-icon" />
              <h4>2. Get Trained</h4>
              <p>Attend orientation and training to learn our teaching and business system.</p>
            </div>
            <div className="franchise-benefit-card1 text-center">
              <img src={step3} alt="Step 3" className="franchise-benefit-icon" />
              <h4>3. Launch Your Center</h4>
              <p>Set up your institute with our guidance and start enrolling students.</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Final CTA */}
      <Row className="text-center py-5">
        <Col>
          <h3 className="mb-3 franchise-heading">Be Your Own Boss</h3>
          <p>
            Empower students, earn income, and make an impact in your community. Whether you're a teacher or school looking to grow — this is your opportunity.
          </p>
          <button className="btn franchise-btn-primary btn-lg me-3">Apply Now</button>
          <button className="btn btn-outline-secondary btn-lg">Download Info Kit</button>
        </Col>
      </Row>
    </Container>
  );
};

export default FranchisePage;
