import React from "react";
import "./FranchiseTeacherParentTestimonials.css";

const testimonials = [
  {
    name: "Neha Verma",
    feedback:
      "As a homemaker, I never thought I could run my own center. Shraddha Institute gave me the skills and confidence to start — and now I earn from home!",
  },
  {
    name: "Anita Rao",
    feedback:
      "I was a school teacher looking for extra income. The training was excellent and I started my classes in just 2 weeks.",
  },
  {
    name: "Kavita Sharma",
    feedback:
      "I love working with children, and now I can do it while running my own business. The support team is always there for me.",
  },
  {
    name: "Pooja Nair",
    feedback:
      "From zero business knowledge to becoming a proud center owner — the journey has been smooth and rewarding.",
  },
];

export default function FranchiseTeacherParentTestimonials() {
  return (
    <div className="teacher-testimonial-section">
      <h2 className="testimonial-heading">
        Stories from Our Successful Partners
      </h2>

      <div className="marquee-container">
        <div className="marquee">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="feedback">"{t.feedback}"</p>
              <p className="name">— {t.name}</p>
            </div>
          ))}
          {/* Duplicate for continuous loop */}
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
