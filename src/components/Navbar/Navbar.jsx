import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Navbar.css";

const Navbar = () => {
  const [showingNav, toggleShowingNav] = useState(false);
  const toggleNav = () => toggleShowingNav(!showingNav);

  return (
    <>
      <nav>
        <div className="elements-wrapper">
          <div className="logo">
            <div className="at-container">
              <div className="at-item menu-animation">
                <Link to="/">Wasif Ali</Link>
              </div>
            </div>
          </div>
          <div className="nav-pages-links at-item">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="blog">Blog</Link>
          </div>
          <div className="nav-social-links at-item">
            <a
              target="_blank"
              rel=" noreferrer"
              href="https://www.facebook.com/Waxif.Alee/"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              target="_blank"
              rel=" noreferrer"
              href="https://www.instagram.com/waxif.alee/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wasif-ali-741b0918b">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel=" noreferrer"
              href="https://www.github.com/WaxifAlee/"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="small-screen-nav">
          <div className="toggle-btn">
            <button onClick={toggleNav}>
              <i
                className={
                  showingNav ? "fas fa-times menu-animation" : "fas fa-bars"
                }
              ></i>
            </button>
          </div>

          <div className={showingNav ? "small-nav visible" : " hidden "}>
            <div className="small-nav-wrapper">
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="about"> About </Link>
                </li>
                <li>
                  <Link to="contact"> Contact </Link>
                </li>
                <li>
                  <Link to="blog"> Blog </Link>
                </li>
                <div className="--small-nav_social-links">
                  <a
                    target="_blank"
                    rel=" noreferrer"
                    href="https://www.facebook.com/Waxif.Alee/"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=" noreferrer"
                    href="https://www.linkedin.com/in/wasif-ali-741b0918b"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=" noreferrer"
                    href="https://www.instagram.com/waxif.alee/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=" noreferrer"
                    href="https://www.github.com/WaxifAlee/"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />

      <Footer />
    </>
  );
};

export default Navbar;
