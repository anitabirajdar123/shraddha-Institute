import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>📬 Contact Us</h2>
        <p>We’re here to help you start your journey with Shraddha Institute. Reach out now!</p>
      </div>

      <form className="contact-form p-4 bg-light rounded shadow">
  <div className="mb-3">
    <input className="form-control" type="text" placeholder="Your Name" required />
  </div>
  <div className="mb-3">
    <input className="form-control" type="email" placeholder="Email Address" required />
  </div>
  <div className="mb-3">
    <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
  </div>
  <button type="submit" className="btn btn-orange w-100">Send Message</button>
</form>

    </section>
  );
};

export default ContactForm;
