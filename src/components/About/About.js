import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about1.png";
import icon from "../../Assets/19.png";
import Toolstack from "./Toolstack";
import './about.css'

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-row">
          <Col md={7} className="about-col">
            <h1 className="project-heading">
              Get to Know <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-col-img about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <div id="education" className="tab-content"> 
          <h1 className="project-heading">
            Education <strong className="purple">Qualification</strong>
          </h1>
          <Row className="about-row">
            <Col className="tech-icons">
              <img src={icon} alt="about" className="img-fluid-education" />
              <h1>London Metropolitan University</h1>
              <h3>( 2024 )</h3>
              <p className="lead">BSE Software Engineering (Top UP)</p>
            </Col>
            <Col className="tech-icons">    
              <img src={icon} alt="about" className="img-fluid-education" />
              <h1>Pearson UK</h1>
              <h3>( Feb 2022 – Jul 2024 )</h3>
              <p className="lead">Level 05 Higher National Diploma in Computing</p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col className="tech-icons">
              <img src={icon} alt="about" className="img-fluid-education" />
              <h1>National Apprentice and Industrial Training Authority Kurunegala</h1>
              <h3>( Jan 2020 – Sep 2020 )</h3>
              <p className="lead">Certificate Program in IT Applications</p>
            </Col>
            <Col className="tech-icons">    
              <img src={icon} alt="about" className="img-fluid-education" />    
              <h1>St. Anne’s College Kurunegala</h1>
              <p className="lead">General Certificate of Education (Advanced Level) (2017 – 2019) – Commerce Stream</p>
              <p className="lead">General Certificate of Education (O-Level) (2015 – 2016)</p>
            </Col>
          </Row>
        </div>

        <div id="experience" className="tab-content-experiance">
          <h1 className="project-heading">
            <strong className="purple">Job</strong> Experience
          </h1>
          <div className="tech-icons">
            <div className="body">
              <h2>Petrol Station Manager <span>(2020-2021)</span></h2>
              <p className="lead">Completed one year of service with substantial knowledge and experience in all aspects of petrol station management.</p>
            </div>
          </div>
          <div className="tech-icons">
            <div className="body">
              <h2>Storekeeper <span>(2019-2020)</span></h2>
              <p className="lead">Worked as a store controller in Ten-Star Helmet Company.</p>
            </div>
          </div>
        </div>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
