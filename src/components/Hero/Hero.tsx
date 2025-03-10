import { FC } from "react";
import "./hero.css";

const Hero: FC = () => {
  return (
    <div className="hero-container">
      {/* Background Video and Curved Line in the Same Container */}
      <div className="background-wrapper">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Curved Red Line */}
        <div className="curved-red-line"></div>
      </div>

      <div className="hero-content">
        <h1>
          <span className="outlined-text">Santi</span> <strong>soft</strong>
        </h1>
        <p>Thanks to the European leader in</p>
        <p>distance learning</p>
      </div>

      <div className="cards-container">
        <div className="card">
          <img src="/images/santisoft-06.png" alt="Distance Learning" />
          <p>Find my <strong>our products </strong></p>
        </div>
        <div className="card">
          <img src="/images/santisoft-06.png" alt="Mon Compte Formation" />
          <p>Find my <strong>what do we have to offer </strong></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
