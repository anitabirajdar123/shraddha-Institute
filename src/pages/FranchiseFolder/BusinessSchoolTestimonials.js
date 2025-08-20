import React from "react";
import "./BusinessSchoolTestimonials.css"; // We'll style it separately

const testimonials = [
  {
    name: "Priya Sharma",
    feedback:
      "Joining Shraddha Business School completely changed my life! I started my own center within 3 months.",
  },
  {
    name: "Anjali Desai",
    feedback:
      "The training, support, and guidance are unmatched. I highly recommend it to anyone who wants to start a business from home.",
  },
  {
    name: "Meera Joshi",
    feedback:
      "I never imagined I could run my own learning center. Shraddha Institute made it possible!",
  },
  {
    name: "Sneha Patil",
    feedback:
      "From zero knowledge to a confident educator — this journey has been magical.",
  },
];

export default function BusinessSchoolTestimonials() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Entrepreneurs Say</h2>
      <div className="marquee-container">
        <div className="marquee">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">"{t.feedback}"</p>
              <p className="name">— {t.name}</p>
            </div>
          ))}
          {/* Duplicate for smooth infinite scroll */}
          {testimonials.map((t, index) => (
            <div key={`dup-${index}`} className="testimonial-card">
              <p className="feedback">"{t.feedback}"</p>
              <p className="name">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
