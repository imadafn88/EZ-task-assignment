import React from 'react';
import './AboutTeam.css';

const AboutTeam = () => {
  const teamMembers = [
    { name: 'omma shwirshi', role: 'Services/Film Production' },
    { name: 'kudeep loihi', role: 'V Films' },
    { name: 'Produm Prajapati', role: 'Services/Premuing' },
    { name: 'Suraj khatri', role: 'Services/Art Curation' }
  ];

  return (
    <section className="about-team" id="about-team">
      <div className="container">
        <h2 className="section-title">About Team</h2>
        <div className="team-content">
          <div className="team-intro">
            <h3>V Films</h3>
            <p>
              Some craft films. Some build brands. Some curate art. We bring it all together – 
              a collective of storytellers driven by one belief: every project deserves to be 
              more than just a message; it should become a masterpiece.
            </p>
            <p>
              From first spark to final frame, from raw ideas to timeless visuals – we shape 
              stories that stay with you.
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  {/* Add image here - export from Figma */}
                  <div className="image-placeholder">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="team-divider"></div>

          <div className="team-expertise">
            <div className="expertise-item">
              <h4>Thinking</h4>
              <p>Film Makers</p>
            </div>
            <div className="expertise-item">
              <h4>Art Exercises</h4>
              <ul>
                <li>Burning Experts</li>
              </ul>
              <p>Take a closer look at the stories we bring to life.</p>
            </div>
          </div>

          <button className="portfolio-btn">View Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;