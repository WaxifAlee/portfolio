import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="elements-wrapper">
        <div className="logo">
        <div class='at-container'>
          <div class='at-item' >
            <a href="/" className="tada">
                      Wasif Ali
                    </a>
          </div>
        </div>
          
        </div>
        <div className="nav-pages-links at-item">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="nav-social-links at-item">
          <a target="_blank" href="https://www.facebook.com/Waxif.Alee/">
            <i className="fab fa-facebook"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/waxif.alee/">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.github.com/WaxifAlee/">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
