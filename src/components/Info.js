import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <section className="info-section py-5" id="info">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="info-card p-4 shadow-sm rounded">
              <h3 className="info-number">500+</h3>
              <p className="info-text">Happy Students Empowered</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card p-4 shadow-sm rounded">
              <h3 className="info-number">100+</h3>
              <p className="info-text">Certified Teachers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card p-4 shadow-sm rounded">
              <h3 className="info-number">10+</h3>
              <p className="info-text">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
