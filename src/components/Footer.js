import React from 'react'
import "./Footer.css";

function Footer() {
  return (
<footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <p>&copy; 2023 Miguel Moreno. All rights reserved.</p>
            <p>Email: miguelmoreno142@yahoo.com</p>
            <div className="footer__social">
              {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a> */}
              <a href="https://github.com/miguela14" target="_blank" rel="noopener noreferrer">
              https://github.com/miguela14
              </a>
            </div>
          </div>
          {/* <div className="footer__right">
            <ul className="footer__nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;