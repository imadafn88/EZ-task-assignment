import React from 'react';
import './AboutUs.css';
import iconsArc from '../../assets/images/about/logo-icons.svg';
import mountainLogo from '../../assets/images/about/mountain.svg';
import note from '../../assets/images/about/notes.png';

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="left-container">
          <div className="sidetext">
            <h5>A montage of familiar faces and names.</h5>
            <h6>
              Some stories come from the biggest names. Others begin with bold, rising voices. 
              We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
            </h6>
          </div>
          <div className="notes">
            <div className="note note-1">
              <img src={note} alt="Projects" />
              <div className="note-text">
                <h3>85+</h3>
                <p>Projects</p>
              </div>
            </div>
            <div className="note note-2">
              <img src={note} alt="Clients" />
              <div className="note-text">
                <h3>50+</h3>
                <p>Clients</p>
              </div>
            </div>
            <div className="note note-3">
              <img src={note} alt="Awards" />
              <div className="note-text">
                <h3>10+</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="about-header">
            <h2>Every project is more than just a brief -</h2>
            <h2>it's a new chapter waiting to be written.</h2>
            <h2>Together, we've crafted tales that inspire,</h2>
            <h2>connect, and endure.</h2>
          </div>
          <div className="icons-arc">
            <img src={iconsArc} alt="Icons Arc" />
          </div>
          <div className="mountain-logo">
            <img src={mountainLogo} alt="Mountain Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
