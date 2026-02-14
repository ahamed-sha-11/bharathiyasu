import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dr. Yasu Bharathi</h3>
          <p>Assistant Professor of English</p>
          <p>Higher Education | Research | Digital Learning</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:drvyassubharathi@gmail.com">
              drvyassubharathi@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#blog">Blog</a>
            </li>
            <li>
              <a href="/#career">Career</a>
            </li>
            <li>
              <a href="/#publications">Publications</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Dr. Yasu Bharathi. All rights reserved.</p>
      </div>
    </footer>
  );
}
