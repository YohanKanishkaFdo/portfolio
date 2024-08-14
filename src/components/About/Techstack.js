import React from "react";
import { Col, Row } from "react-bootstrap";
import Communication from "../../Assets/icon/Communication.png";
import Creativity from "../../Assets/icon/Creativity.png";
import CriticalThinking from "../../Assets/icon/CriticalThinking.png";
import Opennesstolearning from "../../Assets/icon/Opennesstolearning.png";
import Selfmotivation from "../../Assets/icon/Selfmotivation.png";
import Adaptability from "../../Assets/icon/Adaptability.png";
import Timemanagement from "../../Assets/icon/Timemanagement.png";
import Teamwork from "../../Assets/icon/Teamwork.png";
import Problemsolving from "../../Assets/icon/Problemsolving.png";
import Leadership from "../../Assets/icon/Leadership.png";
import './about.css';

function Techstack() {
  return (
    <Row className="techstack-row">
      <Col xs={4} md={2} className="tech-icons">
        <img src={Communication} alt="Communication" className="Professional-skill-icon" />
        <p className="iconp">Communication</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Leadership} alt="Leadership" className="Professional-skill-icon" />
        <p className="iconp">Leadership</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Problemsolving} alt="Problem solving" className="Professional-skill-icon" />
        <p className="iconp">Problem solving</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Teamwork} alt="Teamwork" className="Professional-skill-icon" />
        <p className="iconp">Teamwork</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Timemanagement} alt="Time management" className="Professional-skill-icon" />
        <p className="iconp">Time management</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Adaptability} alt="Adaptability" className="Professional-skill-icon" />
        <p className="iconp">Adaptability</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Selfmotivation} alt="Self-motivation" className="Professional-skill-icon" />
        <p className="iconp">Self-motivation</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Opennesstolearning} alt="Openness to learning" className="Professional-skill-icon" />
        <p className="iconp">Openness to learning</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CriticalThinking} alt="Critical Thinking" className="Professional-skill-icon" />
        <p className="iconp">Critical Thinking</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Creativity} alt="Creativity" className="Professional-skill-icon" />
        <p className="iconp">Creativity</p>
      </Col>
    </Row>
  );
}

export default Techstack;
