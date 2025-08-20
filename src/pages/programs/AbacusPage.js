import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AbacusPage.css';
import abacusHero from '../../assets/abacus.webp';
import benefit1 from '../../assets/programs/abacus1.webp';
import benefit2 from '../../assets/programs/abacus2.jpg';
import benefit3 from '../../assets/programs/abacus3.webp';
import benefit4 from '../../assets/programs/abacus44.jpg';

import abacusHero1 from '../../assets/programs/abacus.jpg';

const testimonials = [
  {
    id: 1,
    name: "Manisha Sontake",
    role: "Parent",
    content: "My daughter's math skills improved dramatically within just 3 months. She can now do calculations faster than me!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "pooja Jadhav",
    role: "Teacher",
    content: "The teacher training program was comprehensive and practical. I've successfully implemented these techniques in my school.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 3,
    name: "Ashawini Awatade",
    role: "Parent",
    content: "My son's concentration has improved so much since starting the abacus program. His overall grades have gone up too!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Pooja Wale",
    role: "Principal",
    content: "We implemented this program school-wide and saw a 25% improvement in math scores across all grades.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 5,
    name: "Vaibhav Khandare",
    role: "Parent",
    content: "The mental math skills my child developed are incredible. She can solve problems instantly without paper!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const AbacusPage = () => {
  return (
    <div className="abacus-page">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="hero-section bg-light-orange d-flex align-items-center">
  <Container>
    <Row className="justify-content-center">
      <Col lg={10} xl={8} className="text-center">
        <h1 className="display-3 fw-bold mb-4 text-orange">
          Master <span className="text-orange">Mental Math</span> with Abacus
        </h1>
        <p className="lead mb-4 mx-auto text-orange" style={{maxWidth: "700px"}}>
          Unlock your child's full potential with our proven abacus training methodology 
          for ages 5-15. Enhance calculation speed, concentration, and cognitive abilities.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button className="btn btn-orange btn-lg px-4 py-2 fw-bold">
            Start Free Trial
          </button>
          <button className="btn btn-outline-orange btn-lg px-4 py-2">
            Learn More
          </button>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <div className="stat-item">
            <h3 className="text-orange mb-0">5000+</h3>
            <p className="text-muted">Students Trained</p>
          </div>
          <div className="stat-item">
            <h3 className="text-orange mb-0">100%</h3>
            <p className="text-muted">Success Rate</p>
          </div>
          
        </div>
      </Col>
    </Row>
  </Container>
</section>
      {/* Benefits Section */}
      <section className="benefits-section py-5 bg-white">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold display-5 mb-3">Benefits of Abacus Learning</h2>
            <p className="section-subtitle text-muted fs-5">
              Our program delivers measurable improvements in multiple cognitive areas
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-3 h-100 bg-gradient-light-hover">
  <div className="icon-wrapper bg-orange-light bg-gradient-orange rounded-circle p-3 mb-4 mx-auto" style={{width: '80px', height: '80px'}}>
    <img src={benefit1} alt="Mental calculation" className="img-fluid" loading="lazy" />
  </div>
  <div className="card-content text-center">
    <h3 className="h5 fw-bold mb-3">Lightning Fast Calculations</h3>
    <p className="text-secondary">
      Students perform complex arithmetic mentally with speed and accuracy,
      reducing calculator dependency.
    </p>
  </div>
</div>
            </Col>
            {/* Benefit 2 */}
            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-3 h-100 border-start border-4 border-orange">
                <div className="icon-wrapper bg-orange-light rounded-circle p-3 mb-3" style={{width: '80px', height: '80px'}}>
                  <img src={benefit2} alt="Concentration" className="img-fluid" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="h4 fw-bold mb-3">Enhanced Concentration</h3>
                  <p className="text-muted">
                    Regular abacus practice significantly improves attention span, focus,
                    and visual memory retention.
                  </p>
                </div>
              </div>
            </Col>
            {/* Benefit 3 */}
            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-3 h-100 border-start border-4 border-orange">
                <div className="icon-wrapper bg-orange-light rounded-circle p-3 mb-3" style={{width: '80px', height: '80px'}}>
                  <img src={benefit3} alt="Academic performance" className="img-fluid" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="h4 fw-bold mb-3">Academic Excellence</h3>
                  <p className="text-muted">
                    Abacus learners typically show 20-30% improvement in overall academic
                    performance, especially in mathematics.
                  </p>
                </div>
              </div>
            </Col>

            {/* Benefit 4 */}
            <Col md={6} lg={3}>
              <div className="benefit-card p-4 rounded-3 h-100 border-start border-4 border-orange">
                <div className="icon-wrapper bg-orange-light rounded-circle p-3 mb-3" style={{width: '80px', height: '80px'}}>
                  <img src={benefit4} alt="Confidence" className="img-fluid" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="h4 fw-bold mb-3">Boosted Confidence</h3>
                  <p className="text-muted">
                    Children gain tremendous self-confidence as they master skills their
                    peers find challenging.
                  </p>
                </div>
              </div>
            </Col>

            {/* Other benefit cards remain the same */}
            {/* ... */}
          </Row>
        </Container>
      </section>

      {/* Testimonial Marquee Section */}
     <section className="testimonial-marquee py-5 bg-light-orange">
  <Container className="text-center mb-5">
    <h2 className="fw-bold display-5 mb-3">What Our Community Says</h2>
    <p className="text-muted fs-5">
      Trusted by parents, teachers, and schools across India
    </p>
  </Container>

  <div className="marquee-wrapper">
    <div className="marquee-track">
      {/* Double the testimonials for seamless looping */}
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="marquee-slide">
          <div className="testimonial-card bg-white p-4 rounded-3 shadow-sm h-100 text-center mx-2">
            {/* Image */}
            <div className="mb-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="rounded-circle img-fluid"
                style={{width: '80px', height: '80px', objectFit: 'cover'}}
              />
            </div>
            
            {/* Name */}
            <h4 className="h5 fw-bold mb-2">{testimonial.name}</h4>
            <p className="text-muted small mb-3">{testimonial.role}</p>
            
            {/* Review */}
            <p className="mb-3">"{testimonial.content}"</p>
            
            {/* Stars */}
            <div className="text-orange fs-5">
              {'★'.repeat(testimonial.rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Other sections remain the same */}
      {/* ... */}

      {/* CTA Section */}
      <section className="cta-section py-5 bg-orange text-white">
        <Container className="text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Child's Math Skills?</h2>
          <p className="cta-subtitle fs-5 mb-5">
            Limited seats available for our next batch starting soon
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light btn-lg px-4 py-2 fw-bold text-orange">
              Enroll Now
            </button>
            <button className="btn btn-outline-light btn-lg px-4 py-2 fw-bold">
              Book Demo
            </button>
          </div>
          <div className="mt-4">
            <p className="small mb-0">
              <i className="bi bi-shield-check me-2"></i> 7-day money back guarantee
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AbacusPage;