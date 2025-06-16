import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const backendPortal = process.env.REACT_APP_BACKEND_PORTAL || "";
  const crestUrl = `${backendPortal}/images/YB.svg`;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) {
      document.querySelector(".nav-links").classList.add("active");
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector(".material-symbols-outlined").classList.add("close");
      document.querySelector(".material-symbols-outlined").classList.remove("hamburger");
      document.querySelector(".material-symbols-outlined").textContent = "close";
    } else {
      document.querySelector(".nav-links").classList.remove("active");
      document.querySelector("body").style.overflowY = "auto";
      document.querySelector(".material-symbols-outlined").classList.remove("close");
      document.querySelector(".material-symbols-outlined").classList.add("hamburger");
      document.querySelector(".material-symbols-outlined").textContent = "menu";
    }
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
          <a href="#news">about</a>
          <a href="#">career</a>
          <a href="#">publications</a>
          <a href="#">blog</a>
        </div>

        <span
          className="material-symbols-outlined hamburger"
          onClick={toggleMobileMenu}
        >
          menu
        </span>
      </div>
    </>
  );
}

export default NavBar;
