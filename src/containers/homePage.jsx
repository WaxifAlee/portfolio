import React from "react";
import Hero from "../components/Hero/Hero";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
