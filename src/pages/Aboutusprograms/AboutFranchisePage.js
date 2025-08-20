import React from 'react';
import './AboutFranchisePage.css';

const AboutFranchisePage = () => {
  return (
    <div className="franchise-page">
      {/* Hero Section */}
      <header className="page-header">
        <h1>Join Our Franchise Network</h1>
        <p>Start your own education center with our proven methods</p>
        <button className="primary-btn">Apply Now</button>
      </header>

      {/* Who Can Join */}
      <section className="franchise-section">
        <h2>Who Can Join</h2>
        <p>We welcome educators, entrepreneurs, and anyone passionate about teaching. No experience needed—we provide full training.</p>
      </section>

      {/* Advantages */}
      <section className="franchise-section">
        <h2>Why Choose Us</h2>
        <ul className="benefits-list">
          <li>Proven teaching methodology</li>
          <li>Flexible setup options</li>
          <li>Full training and ongoing support</li>
          <li>Marketing help and resources</li>
        </ul>
      </section>

      {/* Simple Process */}
      <section className="franchise-section">
        <h2>How It Works</h2>
        <ol className="steps-list">
          <li>Submit your application</li>
          <li>Attend orientation</li>
          <li>Complete training</li>
          <li>Launch your center</li>
        </ol>
      </section>

      {/* Special Offer */}
      <section className="special-offer">
        <h2>Limited Time Offer</h2>
        <p>First 10 franchisees get 50% off setup fees + bonus marketing package.</p>
        <button className="primary-btn">Claim Offer</button>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions? Our team is ready to help.</p>
        <div className="button-group">
          <button className="primary-btn">Book a Call</button>
          <button className="secondary-btn">Email Us</button>
        </div>
      </section>
    </div>
  );
};

export default AboutFranchisePage;
