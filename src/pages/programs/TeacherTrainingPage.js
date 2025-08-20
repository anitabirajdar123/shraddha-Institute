import React from "react";
import { Container, Row, Col, Accordion, Card, Badge } from "react-bootstrap";
import trainingHero from "../../assets/gallery2.jpg";
import { ClockFill, LightningFill } from "react-bootstrap-icons";
import "./TeacherTrainingPage.css";

const TeacherTrainingPage = () => {
  const programs = [
    {
      title: "Basic Certification",
      price: "₹5210",
      duration: "4 Weeks",
      features: ["Abacus methodology", "Classroom techniques", "Starter kit"],
      highlight: false,
    },
    {
      title: "Basic + Advanced Certification",
      price: "₹10210",
      duration: "8 Weeks",
      features: ["Vedic Math included", "Lesson planning", "Business training"],
      highlight: true,
    },
    {
      title: "Franchise Package",
      price: "₹50,000",
      duration: "12 Weeks",
      features: ["Center setup", "Marketing support", "Mentorship"],
      highlight: false,
    },
  ];

  const benefits = [
    { icon: "📜", title: "Recognized Certification", text: "Globally accepted with lifetime validity" },
    { icon: "👩‍🏫", title: "Practical Training", text: "120+ hours of hands-on instruction" },
    { icon: "💼", title: "Career Support", text: "Placement and franchise opportunities" },
  ];

  const curriculum = [
    { title: "Abacus Methodology", content: "Master bead movements and visualization techniques" },
    { title: "Vedic Math", content: "Teach all 16 sutras with practical applications" },
    { title: "Classroom Management", content: "Strategies for engaging young learners" },
    { title: "Business Development", content: "Marketing and center management" },
  ];

  return (
    <div className="teacher-training-page">

      {/* ================= Hero Section ================= */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <Badge bg="light" text="dark" className="mb-3 fw-normal">
                <ClockFill className="me-2" /> Starts January 15th
              </Badge>
              <h1 className="display-3 fw-bold mb-4 text-white">
                Become a <span className="text-orange">Certified</span> Abacus Instructor
              </h1>
              <p className="lead text-light mb-4">
                Transform complex calculations into simple mental exercises for students aged 10+
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
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

      {/* ================= Benefits Section ================= */}
      <Container className="teacher-benefits-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Why Train With Us?</h2>
            <p className="text-muted">Proven training methodology since 2010</p>
          </Col>
        </Row>
        <Row>
          {benefits.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3 hover-orange">
                <div className="icon-circle mb-3 bg-orange-light">{item.icon}</div>
                <h5 className="text-center">{item.title}</h5>
                <p className="text-muted text-center mb-0">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Programs Section ================= */}
      <Container className="programs-section py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-heading mb-3">Training Programs</h2>
            <p className="text-orange-dark">Choose your path to certification</p>
          </Col>
        </Row>
        <Row className="g-4">
          {programs.map((program, index) => (
            <Col lg={4} key={index}>
              <Card className={`h-100 border-0 shadow-sm ${program.highlight ? "border-top border-3 border-orange" : ""}`}>
                <Card.Body className="p-4">
                  {program.highlight && <span className="badge bg-orange text-white mb-3">Most Popular</span>}
                  <h4 className="text-center mb-3">{program.title}</h4>
                  <div className="text-center mb-4">
                    <h3 className="text-orange">{program.price}</h3>
                    <small className="text-muted">{program.duration}</small>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="mb-2">✓ {feature}</li>
                    ))}
                  </ul>
                  <button className={`btn w-100 ${program.highlight ? "btn-orange" : "btn-outline-orange"}`}>Enroll Now</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= Curriculum Section ================= */}
      <Container className="curriculum-section py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img src={trainingHero} alt="Curriculum" className="img-fluid rounded-3 shadow" />
          </Col>
          <Col lg={6}>
            <h2 className="mb-4">Comprehensive Curriculum</h2>
            <Accordion flush>
              {curriculum.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="mb-2 border">
                  <Accordion.Header className="accordion-orange-header">{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* ================= CTA Section ================= */}
      <Container className="teacher-cta-section py-5 text-center">
        <h2 className="mb-3">Ready to Start Teaching?</h2>
        <p className="mb-4">Next batch begins January 15th</p>
        <button className="btn btn-orange px-4 fw-bold">Apply Now</button>
      </Container>

    </div>
  );
};

export default TeacherTrainingPage;
