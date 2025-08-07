// AnimatedTitle.jsx
import React from 'react';
import './AnimatedTitle.css'; // We'll create this

const AnimatedTitle = ({ text }) => {
  return (
    <h1 className="hero-title display-4 mb-3">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="animated-letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
