import React, { useState } from 'react';
import './DemoAndContact.css';
import studentImg from '../assets/student.png';

const DemoAndContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="demo-contact-section" id="contact-demo">
      {/* Contact Form (Left) */}
      <div className="contact-section">
        <div className="contact-header">
          <h2><span className="highlight">Get in Touch</span></h2>
          <p className="subtitle">Have questions? We're here to help guide your learning journey</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              className={`form-control ${errors.name ? 'error' : ''}`}
              type="text"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setActiveField('name')}
              onBlur={() => setActiveField(null)}
              disabled={submitted}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setActiveField('email')}
              onBlur={() => setActiveField(null)}
              disabled={submitted}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className={`form-group ${activeField === 'phone' ? 'active' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? 'error' : ''}`}
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setActiveField('phone')}
              onBlur={() => setActiveField(null)}
              disabled={submitted}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className={`form-group ${activeField === 'message' ? 'active' : ''}`}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className={`form-control ${errors.message ? 'error' : ''}`}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setActiveField('message')}
              onBlur={() => setActiveField(null)}
              disabled={submitted}
            ></textarea>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${submitted ? 'success' : ''}`}
            disabled={submitted}
          >
            {submitted ? (
              <>
                <svg className="checkmark" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                Message Sent!
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      {/* Free Demo (Right) */}
      <div className="demo-section">
        <div className="demo-card">
          <div className="demo-content">
            <div className="demo-badge">Limited Seats</div>
            <h2>
              <span className="emoji">🎓</span>
              Free Demo Class
            </h2>
            <p className="demo-text">
              Experience our unique teaching methodology first-hand. Book a no-obligation demo session today!
            </p>
           
            <button className="demo-btn">
              Book Your Free Session
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="demo-image">
            <img src={studentImg} alt="Happy students learning" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAndContact;