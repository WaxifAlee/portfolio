import React from "react";
import "./Hero.css";
import wasif from "../../assets/wasif.png";
import Bars from "../Bars/Bars";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
       
       <div className="intro-wrapper">
         <div className="image-wrapper">
           <div className="image-container float">
             <img src={wasif} alt="Wasif Ali" />
           </div>
           <div className="typewriter">
            <h2><code>{`< Wasif Ali />`}</code></h2>
           </div>
         </div>
         <div className="text-wrapper">
           <p>Howdy! My name is <b>Wasif Ali</b> and I am a web
            developer and designer. My skills include HTML, CSS,
            JS along with React.JS, PHP, Python and Databases. I 
            have a practical field experience of 5 years with dozens
            of hands-on projects. Hence professionalism and client satisfaction is guaranteed.
            <br />
            Other than that I am a Pianist, Guitarist and Books-Lover so feel free if you ever wanna 
            have a general chit chat. 
            <br /><code>Explore my social media accounts.</code>
            </p>
         </div>
       </div>

       <div className="skills-chart-wrapper">
         <div className="bars-container">
         <h4 style={{textAlign: "center", fontFamily: "Reem Kufi", wordSpacing: "4px", fontWeight: "lighter", fontSize:"1.4rem"}}>Wasif Ali In A Nutshell</h4>

          <Bars bg="#61DBFB" skill="React JS" percent="85%" />
          <Bars bg="#ffe873" skill="Python" percent="90%" />
          <Bars bg="tomato" skill="Database" percent="80%" />
          <Bars bg="#787CB5" skill="PHP" percent="83%" />
          <Bars bg="#e91e63" skill="UI/UX" percent="90%" />
          <Bars bg="#fdd602" skill="Music" percent="90%" />
          <Bars bg="#7C83FD" skill={`Genius ;)`} percent="100%" />
          </div>
       </div>

      </div>
    </div>
  );
};

export default Hero;
