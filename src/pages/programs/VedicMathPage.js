import React from 'react';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import { LightningFill, ClockFill, AwardFill, GraphUp } from 'react-bootstrap-icons';
import './vedicMathPage.css';
import vedicMathImg from '../../assets/vedicmaths.png';
import vedicImg1 from '../../assets/programs/vedic1.jpg';
import vedicImg2 from '../../assets/programs/vedic2.webp';
import vedicImg3 from '../../assets/programs/vedic3.webp';
import { CheckCircleFill } from 'react-bootstrap-icons';


const VedicMathPage = () => {
  const benefits = [
    {
      img: vedicImg1,
      title: "Trick-Based Learning",
      description: "Master 16 Vedic sutras that dramatically reduce calculation time for complex problems.",
      icon: <LightningFill className="text-warning" size={24} />
    },
    {
      img: vedicImg2,
      title: "Improved Accuracy",
      description: "Reduce errors by 70% in school exams and competitive tests with systematic approaches.",
      icon: <AwardFill className="text-primary" size={24} />
    },
    {
      img: vedicImg3,
      title: "Mental Agility",
      description: "Develop lightning-fast mental math skills that last a lifetime.",
      icon: <ClockFill className="text-success" size={24} />
    }
  ];

  const curriculum = [
    {
      level: "Level 1: Base Vedic Techniques",
      content: "Master the foundational 16 sutras, Nikhilam multiplication, and digit-sum verification methods.",
      duration: "8 weeks",
      skills: ["Basic Sutras", "Nikhilam Multiplication", "Digit-Sum Verification"]
    },
    {
      level: "Level 2: Intermediate Applications",
      content: "Advanced techniques for square roots, cube roots, algebraic equations, and percentage calculations.",
      duration: "10 weeks",
      skills: ["Square Roots", "Cube Roots", "Algebraic Equations", "Percentages"]
    },
    {
      level: "Level 3: Competitive Exam Prep",
      content: "Application in real-world scenarios including Olympiads, SAT, and entrance examinations.",
      duration: "12 weeks",
      skills: ["Exam Strategies", "Speed Techniques", "Problem Patterns"]
    }
  ];

  const stats = [
    { value: "10x", label: "Faster Calculations", icon: <GraphUp size={32} /> },
    { value: "94%", label: "Accuracy Improvement", icon: <AwardFill size={32} /> },
    { value: "500+", label: "Happy Students", icon: <LightningFill size={32} /> }
  ];

  return (
    <div className="vedic-math-page">
      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-overlay"></div>
  <Container>
    <Row className="justify-content-center py-5 text-center">
      <Col lg={8}>
        <Badge bg="light" text="dark" className="mb-3 fw-normal">
          <ClockFill className="me-2" /> Starts January 15th
        </Badge>
        <h1 className="display-4 fw-bold text-white mb-4">
          Master Math with <span className="text-warning">Ancient Vedic Techniques</span>
        </h1>
        <p className="lead text-light mb-4">
          Transform complex calculations into simple mental exercises for students aged 10+
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <button className="btn btn-orange btn-lg px-4 py-3 fw-bold">
            Enroll Now <LightningFill className="ms-2" />
          </button>
          <button className="btn btn-outline-light btn-lg px-4 py-3">
            Free Demo Class
          </button>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <Container>
          <Row className="g-4 justify-content-center">
            {stats.map((stat, index) => (
              <Col md={4} key={index} className="text-center">
                <div className="stat-card p-4 rounded-3 bg-white shadow-sm h-100">
                  <div className="stat-icon mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="display-5 fw-bold text-orange">{stat.value}</h3>
                  <p className="mb-0 text-muted">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3">
                Why <span className="text-orange">Vedic Math</span> Works
              </h2>
              <p className="section-subtitle lead text-muted">
                Scientifically-proven techniques that make math enjoyable and effortless
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col lg={4} key={index}>
                <div className="benefit-card h-100">
                  <div className="card-image-container">
                    <img 
                      src={benefit.img} 
                      alt={benefit.title}
                      className="benefit-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="card-body p-4">
                    <div className="icon-container mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted mb-0">{benefit.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3">
                Our <span className=".text-orange">Structured</span> Curriculum
              </h2>
              <p className="section-subtitle lead text-muted">
                Progressive learning path designed for maximum results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              <Accordion flush className="curriculum-accordion">
                {curriculum.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border-0">
                    <Accordion.Header className="accordion-header p-4">
                      <div className="d-flex w-100 justify-content-between align-items-center">
                        <div>
                          <h3 className="h5 mb-1 fw-bold">{item.level}</h3>
                          <Badge bg="orange" className="me-2">
                            {item.duration}
                          </Badge>
                        </div>
                        <div className="d-none d-md-block">
                          {item.skills.map((skill, i) => (
                            <Badge key={i} bg="light" text="dark" className="me-2">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="p-4 bg-white">
                      <p>{item.content}</p>
                      <div className="mt-3">
                        <h4 className="h6 fw-bold mb-2">You'll Learn:</h4>
                        <ul className="list-unstyled">
                          {item.skills.map((skill, i) => (
                            <li key={i} className="mb-2">
                              <CheckCircleFill className="text-success me-2" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-5 text-orange text-white">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3 text-orange">
                Success <span className="text-orange">Stories</span>
              </h2>
              <p className="section-subtitle text-light">
                Hear from our students and parents
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-3 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rating-badge text-orange text-dark me-3">
                    4.9 ★
                  </div>
                  <div>
                    <h4 className="h6 mb-0">Rahul S.</h4>
                    <small className="text-orange">Grade 8 Student</small>
                  </div>
                </div>
                <p className="mb-0">
                  "I went from struggling with basic multiplication to winning district math competitions in just 6 months!"
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-3 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rating-badge text-orange text-dark me-3">
                    5.0 ★
                  </div>
                  <div>
                    <h4 className="h6 mb-0">Priya M.</h4>
                    <small className="text-orange">Parent</small>
                  </div>
                </div>
                <p className="mb-0">
                  "My daughter's math anxiety disappeared completely. She now enjoys solving problems mentally!"
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card p-4 rounded-3 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="rating-badge text-orange text-dark me-3">
                    4.8 ★
                  </div>
                  <div>
                    <h4 className="h6 mb-0">Arjun K.</h4>
                    <small className="text-orange">SAT Aspirant</small>
                  </div>
                </div>
                <p className="mb-0">
                  "Cut my calculation time by 70% in SAT math section. Scored 780/800 thanks to Vedic techniques!"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="cta-card p-5 rounded-4 bg-gradient-primary text-white">
                <Badge bg="orange" text="white" className="mb-3">
                  Limited Time Offer
                </Badge>
                <h2 className="mb-4">Ready to Transform Your Math Skills?</h2>
                <p className="lead mb-4">
                  Enroll before January 10th and get <span className="fw-bold">20% OFF</span> + Free Abacus Starter Kit
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <button className="btn btn-light btn-lg px-4 py-3 fw-bold">
                    Claim Discount <LightningFill className="ms-2" />
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3">
                    Download Syllabus
                  </button>
                </div>
                <div className="mt-4">
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default VedicMathPage;