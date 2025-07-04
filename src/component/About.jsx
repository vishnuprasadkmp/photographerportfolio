import React from "react";
import "../styles/About.css";
import Navbarpf from "./Navbarpf";

const About = () => {
  return (
    <>
      <div className="about">
        <Navbarpf />

        {/* Full-width hero image with bottom-left legend */}
        <div className="about-hero-image">
          <img src="/9.JPG" alt="About Me Banner" />
          <div className="about-legend-overlay">
            <legend>About Me</legend>
          </div>
        </div>

        {/* About text section */}
        <section className="about-section">
          <div className="about-container">
            <p className="about-description">
              Hello, I'm Vishnu KM, a passionate commercial photographer with a keen eye
              for architecture and interior spaces. As a recent graduate from Pearl
              Academy, Brigade Road, Bengaluru, my journey into photography is driven by
              curiosity, creativity, and a deep desire to tell meaningful visual stories.
            </p>
            <p className="about-description">
              For me, photography is more than just capturing images—it's about translating
              spaces into compelling narratives. While I may be new to the professional
              world, I bring a fresh perspective, a strong foundation in visual arts, and
              an eagerness to learn and grow in this ever-evolving industry.
              Each project is an opportunity to explore new ideas, push creative boundaries,
              and deliver images that speak with purpose. Let’s collaborate and create
              something visually powerful together.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
