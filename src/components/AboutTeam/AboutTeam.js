import React from "react";
import "./AboutTeam.css";
import indiaGate from "../../assets/images/aboutTeam/india-gate.png";
import teamImage from "../../assets/images/aboutTeam/team.svg";
const AboutTeam = () => {
  return (
    <section className="about-team" id="about-team">
      <div className="sticky-note">
        <p>
          Some craft films. Some build brands. Some curate art. We bring it all
          together – a collective of storytellers driven by one belief: every
          project deserves to be more than just a message; it should become a
          masterpiece.
        </p>
        <p>
          From first spark to final frame, from raw ideas to timeless visuals –
          we shape stories that stay with you.
        </p>
      </div>

      <div className="container">
        <div className="india-gate">
          <img src={indiaGate} alt="India Gate Icon" />
        </div>
        <div className="about-content">
          {/* Left Side - India Gate */}

          {/* Center Content */}
          <div className="team-content">
            {/* Team Roles */}
            <div className="team-roles">
              <div className="role film-makers">
                <span>Film Makers</span>
              </div>

              <img
                src={teamImage}
                alt="Team Illustration"
                className="team-illustration"
              />

              <div className="role art-curators">
                <span>Art Curators</span>
              </div>
            </div>

            {/* Team Description */}
            <div className="branding-experts">
              <span>Branding Experts</span>
            </div>

            {/* Call to Action */}
            <p className="cta-text">
              Take a closer look at the stories V bring to life.
            </p>
            <button
              className="view-portfolio"
              onClick={() => {
                const section = document.getElementById("portfolio");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
