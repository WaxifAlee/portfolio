import React from "react";
import "./Hero.css";
import wasif from "../../assets/wasif.png";
import blob from "../../assets/blob.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="intro-text">
          <div className="image-container float">
            <img src={wasif} alt="Wasif Ali" />
          </div>
          <div className="typewriter">
            <h2>
              <code> {"<Hello World! />"} </code>
            </h2>
          </div>
        </div>
        <div className="intro typewriter">
          <h2>Wasif Ali</h2>
          <h4>
            Howdy! My name is Wasif Ali. I am a self-made Web-Developer,
            Programmer and Designer. In my leausures I adore playing Piano and
            Guitar <i className="fas fa-music"></i> or reading some good books .
            Occasianally I write poetry and do some nature photography. Feel
            free to explore my social-media accounts.
            <i className="fas fa-book"></i>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
