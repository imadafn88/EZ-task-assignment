import React, { useEffect, useRef } from "react";
import "./Hero.css";

import backgroundPattern from "../../assets/images/hero/hero-mandala.png";
import vFilmsIcon from "../../assets/images/hero/vfilm-logo.png";

const Hero = () => {
  const heroRef = useRef(null);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / documentHeight) * 100;

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-background-pattern"></div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <div className="mandala-pattern">
                <img src={backgroundPattern} alt="Mandala Pattern" />
                <img
                  src={vFilmsIcon}
                  alt="V Films"
                  className="vfilms-actual-icon"
                />
              </div>
            </div>

            {/* Main Hero Text */}
            <div className="hero-text">
              <h1 className="hero-title">
                Varnan is where stories find their voice and form
              </h1>

              <div className="hero-tags">
                <span className="tag">Films</span>
                <span className="tag dot">·</span>
                <span className="tag">Brands</span>
                <span className="tag dot">·</span>
                <span className="tag">Art</span>
              </div>

              <div className="hero-description">
                <p>
                  Since 2008, V's been telling stories - stories of people,
                  their journeys, and the places that shape them. Some begin in
                  polished boardrooms, others in humble village squares. But
                  every story starts the same way - by listening with intention.
                  V believes it takes trust, patience, and an eye for the unseen
                  to capture what truly matters. V doesn't just tell stories - V
                  honors them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Indicator */}
      <div className="horizontal-scroll">
        <div
          className="scroll-progress"
          ref={scrollProgressRef}
          onClick={() =>
            document
              .getElementById("about-team")
              .scrollIntoView({ behavior: "smooth" })
          }
        ></div>
      </div>
    </>
  );
};

export default Hero;
