import React, { useState, useEffect } from "react";
import "./Header.css";
import vfilmsIcon from "../../assets/images/hero/vfilm-logo.png";
import menuIcon from "../../assets/images/hero/menu.svg";
import closeIcon from "../../assets/images/hero/open.svg";
import msgIcon from "../../assets/images/hero/mail.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.bottom > 100); // hides logo on hero
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Team", href: "#about-team" },
    { name: "About Us", href: "#about-us" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <header className={`header ${isHeroVisible ? "hide-logo" : ""}`}>
      <div className="nav-container">
        {/* Left Logo */}
        <div className={`logo ${isHeroVisible ? "hidden" : ""}`}>
          <img src={vfilmsIcon} alt="V Films" />
        </div>

        {/* Right Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="Menu"
            className="menu-toggle-icon"
          />
        </div>

        {/* Horizontal Menu */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="lets-talk"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
              <img src={msgIcon} alt="message" className="msg-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
