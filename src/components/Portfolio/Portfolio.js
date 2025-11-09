import React from "react";
import "./Portfolio.css";

// ✅ Update these paths based on your ass

import mainImage from "../../assets/images/portfolio/mainimage.svg";
import rightSvg from "../../assets/images/portfolio/design.svg";
import leftSvg from "../../assets/images/portfolio/leftcam.svg";
import leftArrow from "../../assets/images/portfolio/left-arrow.png";
import rightArrow from "../../assets/images/portfolio/right-arrow.png";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      {/* Decorative SVGs */}
      <img src={leftSvg} alt="Decorative Left" className="portfolio-left-svg" />
      <img
        src={rightSvg}
        alt="Decorative Right"
        className="portfolio-right-svg"
      />

      {/* Text */}
      <div className="portfolio-text">
        <h2>The Highlight Reel</h2>
        <p>Watch the magic we’ve captured.</p>
      </div>

      {/* Main Image + Arrows */}
      <div className="portfolio-image-wrapper">
        <div className="arrow-container left-arrow">
          <img src={leftArrow} alt="Left Arrow" />
        </div>

        <img
          src={mainImage}
          alt="Portfolio Main"
          className="portfolio-main-img"
        />

        <div className="arrow-container right-arrow">
          <img src={rightArrow} alt="Right Arrow" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
