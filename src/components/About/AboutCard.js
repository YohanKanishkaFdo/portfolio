import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './about.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello everyone! I am <span className="purple">Yohan kanishka fernando</span>
            from <span className="purple">Sri Lanka.</span>
            <br />
            I'm currently pursuing my studies as a final-year student.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="quote">
            "You are a winner as long as you don't give up"
          </p>
          <footer className="blockquote-footer">Yohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
