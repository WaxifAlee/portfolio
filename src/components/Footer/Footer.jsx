import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <div className="footer">
      <div className="footer-wrapper">
          <div className="pages-links">
              <ul>
                
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
              <h4> Copyright <i className="fas fa-copyright"></i> Wasif Ali <code>2022-2023</code> </h4>
          </div>
      </div>
  </div>;
};

export default Footer;
