import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:meghan.mullallyjobs@gmail.com">meghan.mullallyjobs@gmail.com</a></p>
        </div>
        <div className="social-links">
          <h4>Follow Me</h4>
          <a href="https://github.com/meghanmullally" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/meghan-mullally/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Meghan Mullally. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;