import React, {useState} from "react";
import "./Navbar.css";

const Navbar = () => {

  const [showingNav, toggleShowingNav] = useState(false);
  const toggleNav = () => toggleShowingNav(!showingNav);

  return (
    <nav>
      <div className="elements-wrapper">
        <div className="logo">
        <div className='at-container'>
          <div className='at-item menu-animation' >
            <a href="/">
                      Wasif Ali
                    </a>
          </div>
        </div>
          
        </div>
        <div className="nav-pages-links at-item">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
        </div>
        <div className="nav-social-links at-item">
          <a target="_blank" rel="norefferer" href="https://www.facebook.com/Waxif.Alee/">
            <i className="fab fa-facebook"></i>
          </a>
          <a target="_blank" rel="norefferer" href="https://www.instagram.com/waxif.alee/">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="_blank" rel="norefferer" href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a target="_blank" rel="norefferer" href="https://www.github.com/WaxifAlee/">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="small-screen-nav">

        <div className="toggle-btn">
          <button onClick={toggleNav} ><i className={ showingNav ? "fas fa-times menu-animation" : "fas fa-bars" }></i></button>
        </div>

        <div className={ showingNav ? "small-nav visible" : " hidden "}>
          <div className="small-nav-wrapper">
            <ul>
              <li><a href="/"> Home </a></li>
              <li><a href="/"> About </a></li>
              <li><a href="/"> Contact </a></li>
              <li><a href="/"> Blog </a></li>
              <div className="--small-nav_social-links">
              <a href="/"><i className="fab fa-facebook"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-github"></i></a>
              </div>
            </ul>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
