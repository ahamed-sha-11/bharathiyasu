import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  let crestUrl = process.env.REACT_APP_BACKEND_PORTAL + "/images/YB.svg";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-heading">
          <h1>D.R Yasu</h1>
          <div className="nav-crest-container">
            <img className="nav-crest" src={crestUrl} alt="YB" />
          </div>
          <h1>Bharathi</h1>
        </div>

        <div className="nav-links">
          <a href="#">about</a>
          <a href="#">career</a>
          <a href="#">events</a>
          <a href="#">blog</a>
        </div>

        <span
          class="material-symbols-outlined hamburger"
          onClick={toggleMobileMenu}
        >
          menu
        </span>
      </div>
    </>
  );
}

export default NavBar;
