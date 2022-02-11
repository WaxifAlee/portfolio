import React from "react";
import "./About.css"
import ComputerGraphics from "../../assets/computer.svg"

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
            <div className="section-main-container">
              <div className="section_text">
                <h2 style={{textAlign: "left", maxWidth: "fit-content", color: "#3749BE", padding: "15px"}}> Why I chose Programming? </h2>
                <h3>Honestly speaking I'm a computer geek since birth. I got my first computer
                 when I was almost 5 years old and since then I've been exploring and experimenting with this technology.
                 I used to spend most of my time infront of computer as a kid either playing video games or learning something new 
                 about this interesting piece of innovation. That's how I taught myself writing code in multiple programming languages
                  and developing the web. It felt like a puzzle which is exactly what my chaotic mind wants, problems to solve. I never saw
                   programming as a carrier or a way to make money. I do it because I  <i className="fas fa-heart"></i>  it</h3>
              </div>
              <div className="section-graphics">
                <img src={ComputerGraphics} alt="" />
              </div>
            </div>
          </div>
        </section>
      
      
      </div>
    </div>
  );
};

export default About;
