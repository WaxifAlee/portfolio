import React from "react";
import "./About.css"

const About = () => {
  return (
    <div>
      <div className="about-page">
        <section className="section-container">
          <div className="--section__elements-container">
            <div className="about-me-text-container typewriter">
              <h2>About Me!</h2>
              <hr style={{width:"60%", textAlign:"center", marginLeft:"20%", marginTop: "5px", border: "2px solid #0C6170", borderRadius: "5px"}} />
              <hr style={{width:"30%", textAlign:"center", marginLeft:"36%", marginTop: "5px", border: "2px solid #0C6170", borderRadius: "5px"}} />
            </div>
            <div className="section-main-elements">
              <div className="--section__elements-container-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam natus quod fugit, ex molestias necessitatibus assumenda obcaecati delectus officia dolor itaque esse reiciendis dignissimos fuga temporibus architecto quisquam eveniet.</p>
              </div>
              <div className="--section__elements-container-image"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
