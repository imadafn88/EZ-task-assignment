import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Contact</h2>
            <h3 className="contact-subtitle">V Films</h3>
            <p className="contact-description">
              Whether you have an idea, a question, or simply want to explore how we can work together. 
              We're just a message away.
            </p>
            <p className="contact-subtext">
              Let's catch up over coffee.<br />
              Great stories always begin with a good conversation
            </p>
            
            <div className="contact-cta">
              <h4 className="cta-title">Join the Story</h4>
              <p className="cta-text">Ready to bring your vision to life? Let's talk</p>
            </div>

            <div className="contact-details">
              <p className="email">vemkiu@vamadilim.co.in</p>
              <p className="phone">+91 98726 84567</p>
            </div>
          </div>

          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;