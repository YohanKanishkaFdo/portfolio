import React from 'react';
import './contact.css';
import Particle from "./Particle";
import contact from "../Assets/icon/22.png"

const ContactUs = () => {
  return (
    <section id="contact-section" className="section-wrapper">
      <Particle />
      <div className="contact-right">
        <h3>Contact Me</h3>

        <p>Email: yohankanishka126@gmail.com</p>
        <p>Phone: +94 70 331 9087</p>
        <p>Address: No :- 194, Wilgoda Waththa, Kurunegala 60000</p>
        <hr></hr>
        <div className="contact-icons">
        <img src={contact } alt="about" className="img-fluid-education" />    

        </div>
    

      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-title">
          <h2>Work Together</h2>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="22efedd3-3afd-4de9-8636-c242f77a702a"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Your Mobile Number"
          className="contact-inputs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-inputs-message"
          required
        />
        <button type="submit" className="button-send"> Send Message</button>
      </form>

    </section>
  );
};

export default ContactUs;
