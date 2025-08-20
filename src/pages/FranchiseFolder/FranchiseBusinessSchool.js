import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaSchool, FaChartLine, FaHandsHelping, FaChalkboardTeacher, FaAward, FaUsers } from 'react-icons/fa';
import { IoIosArrowForward, IoMdSchool } from 'react-icons/io';
import './FranchiseBusinessSchool.css';

import BusinessSchoolTestimonials from "./BusinessSchoolTestimonials";

const FranchiseBusinessSchool = () => {
  const benefits = [
    {
      icon: <FaSchool size={42} className="text-orange" />,
      title: 'Brand Power',
      text: 'Recognized leader in Abacus & Vedic Math with a trusted business model.',
      stat: '100+ Partner Schools'
    },
    {
      icon: <FaChartLine size={42} className="text-orange" />,
      title: 'School Integration',
      text: 'Bring our programs into your school to boost admissions and results.',
      stat: '40%+ Math Improvement'
    },
    {
      icon: <FaHandsHelping size={42} className="text-orange" />,
      title: 'Complete Setup Support',
      text: 'From infrastructure to marketing — we guide your entire journey.',
      stat: '95% Success Rate'
    },
    {
      icon: <FaChalkboardTeacher size={42} className="text-orange" />,
      title: 'Expert Training',
      text: 'We train your teachers with structured, professional modules.',
      stat: '500+ Teachers Certified'
    }
  ];

  const steps = [
    {
      number: '1',
      icon: <FaUsers size={28} className="text-orange" />,
      title: 'Connect with Us',
      text: 'Fill out the form or call us to schedule your consultation.'
    },
    {
      number: '2',
      icon: <IoMdSchool size={28} className="text-orange" />,
      title: 'Attend Orientation',
      text: 'Understand our model, investment, and profit potential.'
    },
    {
      number: '3',
      icon: <FaAward size={28} className="text-orange" />,
      title: 'Launch Successfully',
      text: 'Open your center or school program with our full support.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium School Franchise Opportunity | Shraddha Institute</title>
        <meta
          name="description"
          content="Premium partnership with Shraddha Institute to start a school franchise or expand your education business. Complete training, branding, and ongoing support."
        />
        <meta
          name="keywords"
          content="premium school franchise, education business, abacus franchise, vedic math franchise, educational partnership"
        />
        <meta property="og:image" content="https://yourdomain.com/images/school-franchise-og.jpg" />
        <link
          rel="canonical"
          href="https://yourdomain.com/franchise/business-school"
        />
      </Helmet>

      <div className="franchise-business-page">
        {/* Animated Marquee */}
        <div className="announcement-marquee bg-orange-gradient text-white py-3">
          <div className="marquee-container">
            <div className="marquee-content">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="marquee-item">
                    <span className="badge bg-white text-orange me-2">NEW</span>
                    Limited Time Offer: 20% Off Franchise Fee
                  </span>
                  <span className="marquee-divider mx-4">•</span>
                  <span className="marquee-item">
                    <span className="badge bg-white text-orange me-2">HOT</span>
                    Exclusive Territory Protection Available
                  </span>
                  <span className="marquee-divider mx-4">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
       {/* Hero Section */}
{/* Hero Section */}
<section className="hero-section py-5 position-relative">
  {/* Very subtle orange wash */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
    background: 'linear-gradient(135deg, rgba(255,237,222,0.2) 0%, rgba(255,255,255,1) 70%)',
    zIndex: -1
  }}></div>

  <Container className="text-center">
    <div className="mx-auto" style={{ maxWidth: '800px' }}>
      <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-4">
        <FaSchool className="me-2" /> For Educational Institutions
      </span>
      
      <h1 className="display-3 fw-bold mb-4">
        Transform Your School with <span className="text-orange">Our Math Programs</span>
      </h1>
      
      <p className="lead mb-4 text-muted mx-auto">
        Partner with India's leading Abacus & Vedic Math institution to enhance 
        student outcomes with our proven curriculum and teacher training system.
      </p>
      
      <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
        <Button 
          variant="orange" 
          size="lg" 
          className="rounded-pill px-4 fw-semibold d-flex align-items-center mx-2 mb-2"
        >
          Partner With Us <IoIosArrowForward className="ms-2" />
        </Button>
        
        <Button 
          variant="outline-secondary" 
          size="lg" 
          className="rounded-pill px-4 fw-semibold mx-2 mb-2"
        >
          Learn More
        </Button>
      </div>
      
      <div className="trust-markers d-flex flex-wrap gap-4 justify-content-center">
        {[
          "NEP 2020 Aligned Curriculum",
          "100+ Partner Schools", 
          "40%+ Math Improvement",
          "5-Star Franchise Rating"
        ].map((item, i) => (
          <div key={i} className="d-flex align-items-center text-dark small">
            <span className="bg-orange text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{
              width: '24px',
              height: '24px',
              fontSize: '12px'
            }}>
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
        {/* Benefits Section */}
        <section className="benefits-section py-5 bg-light">
          <Container>
            <div className="text-center mb-5">
              <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3">
                Our Advantages
              </span>
              <h2 className="display-4 fw-bold mb-3">Why Schools Choose Shraddha Institute</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Comprehensive support for educational institutions of all sizes
              </p>
            </div>
            
            <Row className="g-4">
              {benefits.map((benefit, index) => (
                <Col xl={3} lg={6} key={index}>
                  <div className="benefit-card h-100 p-4 rounded-4 shadow-sm-hover transition-all">
                    <div className="benefit-icon-wrapper mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted mb-4">{benefit.text}</p>
                    <div className="benefit-stat bg-orange-soft text-orange rounded-pill px-3 py-1 d-inline-block">
                      {benefit.stat}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Steps Section */}
        <section className="steps-section py-5 bg-white position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: 'linear-gradient(135deg, rgba(255,248,242,0.5) 0%, rgba(255,239,226,0.3) 100%)',
            zIndex: 0
          }}></div>
          
          <Container className="position-relative" style={{ zIndex: 1 }}>
            <div className="text-center mb-5">
              <span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3">
                Simple Process
              </span>
              <h2 className="display-4 fw-bold mb-3">Start Your Franchise in 3 Steps</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Our streamlined onboarding gets you operational quickly
              </p>
            </div>
            
            <Row className="justify-content-center g-4">
              {steps.map((step, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="step-card h-100 p-4 rounded-4 bg-white shadow-sm position-relative">
                    <div className="step-number-circle bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-4">
                      {step.number}
                    </div>
                    <div className="step-icon mb-3 text-orange">
                      {step.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{step.title}</h3>
                    <p className="text-muted mb-0">{step.text}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="step-arrow d-none d-lg-block">
                        <IoIosArrowForward size={28} className="text-orange" />
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <BusinessSchoolTestimonials />

        {/* Final CTA */}
        <section className="final-cta py-5 position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-orange-gradient" style={{
            zIndex: -2
          }}></div>
          
          <div className="position-absolute bottom-0 end-0" style={{
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            transform: 'translate(30%, 30%)',
            zIndex: -1
          }}></div>

          <Container className="text-center position-relative py-5">
            <h2 className="display-4 fw-bold text-white mb-4">
              Ready to Elevate Your Institution?
            </h2>
            
            <p className="cta-subtitle text-white-80 lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Limited franchise territories available. Apply today to secure your exclusive partnership.
            </p>
            
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Button 
                variant="light" 
                size="lg" 
                className="rounded-pill px-4 fw-semibold d-flex align-items-center shadow"
              >
                Get Franchise Details <IoIosArrowForward className="ms-2" />
              </Button>
              
              <Button 
                variant="outline-light" 
                size="lg" 
                className="rounded-pill px-4 fw-semibold"
              >
                <FaChalkboardTeacher className="me-2" /> Schedule Call
              </Button>
            </div>
            
            <div className="mt-5 pt-3">
              <div className="d-inline-flex align-items-center bg-white bg-opacity-10 px-3 py-2 rounded-pill">
                <FaAward className="text-orange-light me-2" />
                <span className="text-white fw-medium">
                  Recognized as "Best Education Franchise 2023"
                </span>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default FranchiseBusinessSchool;