import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="pages-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <h4>
            Copyright <i className="fas fa-copyright"></i>
            <br />
            <code> Wasif Ali 2022-2023</code>
          </h4>
        </div>

        <div className="social-links">
          <ul>
            <li>
              <a
                id="facebook-link"
                target="_blank"
                href="https://www.facebook.com/Waxif.Alee/" rel="noreferrer"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                id="linkedin-link"
                target="_blank"
                href="https://www.linkedin.com/in/wasif-ali-741b0918b/" rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                id="github-link"
                target="_blank"
                href="https://www.github.com/WaxifAlee/" rel="noreferrer"
              >
                <i className="fab fa-github"></i> Github
              </a>
            </li>
            <li>
              <a
                id="instagram-link"
                target="_blank"
                href="https://www.instagram.com/Waxif.Alee/" rel="noreferrer"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
