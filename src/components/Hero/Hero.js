import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Vernan is where stories find their voice and form
          </h1>
          <div className="hero-tags">
            <span className="tag">Films</span>
            <span className="tag">Brands</span>
            <span className="tag">Art</span>
          </div>
          <div className="hero-description">
            <p>
              Since 2009, we've been telling stories - stories of people, brilliant journeys, 
              and the places that shape them. Some begin in polished boardrooms, others in 
              humble village squares. But every story starts the same way - by listening with intention.
            </p>
            <p>
              We believe it takes trust, patience, and an eye for the unseen to capture what 
              truly matters. We don't just tell stories - we honor them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;