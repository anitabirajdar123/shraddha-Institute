import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './DMITPage.css';
import dmitImg from '../../assets/dmit.jpg';
import dmitImg1 from '../../assets/programs/dmit1.jpeg';
import dmitImg2 from '../../assets/programs/dmit2.jpg';
import dmitImg3 from '../../assets/programs/dmit3.png';

const DMITPage = () => {
  return (
    <Container className="program-page dmit-page">  {/* Added dmit-page class here */}
      {/* Header Section */}
      <Row className="header-section py-5 align-items-center">
        <Col lg={6}>
          <h1 className="display-4 fw-bold dmit-heading">DMIT Brain Development</h1>
          <p className="lead">
            Discover your child’s unique strengths and learning style through a scientific fingerprint analysis. Tailored for parents, students, and educators.
          </p>
          <button className="btn btn-orange btn-lg mt-3">Book a Consultation</button>
        </Col>
        <Col lg={6}>
          <img 
            src={dmitImg} 
            alt="DMIT brain test" 
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Benefits Section */}
     
      {/* Curriculum / Report Overview */}
      <Row className="curriculum-section py-5 bg-light">
        <Col lg={10} className="mx-auto">
          <h2 className="text-center mb-5 dmit-heading">What’s Included in the Report</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Brain Dominance Analysis</Accordion.Header>
              <Accordion.Body>
                Get insights into left/right brain usage, and cognitive preferences.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Learning Style Identification</Accordion.Header>
              <Accordion.Body>
                Understand whether your child learns best visually, auditorily, or kinesthetically.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Career Recommendations</Accordion.Header>
              <Accordion.Body>
                Based on fingerprints and personality type, career paths are suggested.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* CTA */}
      <Row className="text-center py-5">
        <Col>
          <h3 className="mb-3 dmit-heading">Unlock Your Child’s True Potential</h3>
          <p>Our certified DMIT experts will guide you through every step of the assessment.</p>
          <button className="btn btn-primary btn-lg">Book Now</button>
        </Col>
      </Row>
    </Container>
  );
};

export default DMITPage;
