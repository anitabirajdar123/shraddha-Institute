import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="about-page">
      <About expanded={true} /> {/* Pass prop to show expanded content */}
      {/* Add any additional page-specific content */}
    </div>
  );
};

export default AboutPage;