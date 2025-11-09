// src/components/Contact/Contact.js
import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-desc">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away.
          </p>

          <p className="contact-sub">
            Let’s catch up over coffee.
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="contact-cta">
            <h2 className="cta-title">Join the Story</h2>
            <p className="cta-sub">
              Ready to bring your vision to life? Let’s talk
            </p>
          </div>

          <div className="contact-form-box">
            <ContactForm />
            <div className="contact-details">
              <p className="contact-email">vernita@varnanfilms.co.in</p>
              <p className="contact-phone">+91 98736 84567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
