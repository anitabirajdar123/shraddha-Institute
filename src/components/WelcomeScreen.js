// src/components/WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onSkip }) => {
  return (
    <div className="welcome-container">
      <div className="emoji-bounce">🎓🚀📚🧠✨</div>
      <h1 className="welcome-title">Welcome to Shraddha Institute!</h1>
      <p className="welcome-subtitle">Get ready to boost your brain power 💡</p>
      <button className="start-button" onClick={onSkip}>Start Learning 🎉</button>
    </div>
  );
};

export default WelcomeScreen;
