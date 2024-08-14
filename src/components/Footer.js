import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../Assets/logo.png";
import whatsapplogo from "../Assets/icon/whatsapp.png";
import linkedin from "../Assets/icon/linkedin.png";
import './footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-">
        
        <img src={footerlogo} alt="footer-logo" className="footer-logo-img" />

        </Col>
        <Col md="4" className="footer-copywright">
        <h3>Designed and Developed by Yohan Fernando </h3>
        <h3>Copyright © {year} YF</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://wa.me/94703319087"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <img src={whatsapplogo} alt="about" className="footer-icon" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yohan-fernando-a236332bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <img src={linkedin} alt="about" className="footer-icon" />

              </a>
            </li>
          </ul>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
