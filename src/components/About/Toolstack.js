import React from "react";
import { Col, Row } from "react-bootstrap";
import html from "../../Assets/icon/33.png";
import c from "../../Assets/icon/30.png";
import sql from "../../Assets/icon/31.png";
import php from "../../Assets/icon/32.png";
import css from "../../Assets/icon/36.png";
import './about.css';

function Toolstack() {
  return (
    <Row className="toolstack-row">
      <Col xs={4} md={2} className="tool-icons-card">
        <img src={html} alt="HTML" className="tool-icon" />
      </Col>
      <Col xs={4} md={2} className="tool-icons-card">
        <img src={c} alt="C" className="tool-icon" />
      </Col>
      <Col xs={4} md={2} className="tool-icons-card">
        <img src={sql} alt="SQL" className="tool-icon" />
      </Col>
      <Col xs={4} md={2} className="tool-icons-card">
        <img src={php} alt="PHP" className="tool-icon" />
      </Col>
      <Col xs={4} md={2} className="tool-icons-card">
        <img src={css} alt="CSS" className="tool-icon" />
      </Col>
    </Row>
  );
}

export default Toolstack;
