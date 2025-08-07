import React from 'react';
import Lottie from 'lottie-react';
import trainingAnim from '../assets/lottie/training.json';
import './Training.css';

const Training = () => {
  return (
    <section className="training-section py-5" id="training">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2>Teacher Training Program</h2>
            <p>
              At <strong>Shraddha Institute</strong>, we offer <span className="highlight">Certified Abacus & Vedic Math Training</span> 
              to help educators gain confidence and expertise.
            </p>
            <ul className="list-unstyled text-orange fw-bold">
              <li>📚 Comprehensive Curriculum</li>
              <li>🎓 Certification upon Completion</li>
              <li>💻 Online + Offline Training Options</li>
              <li>🤝 Post-Training Support</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center" data-aos="zoom-in">
  <Lottie 
    animationData={trainingAnim} 
    loop 
    className="training-animation" 
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default Training;
