import React from "react";
import "./NavBar.css";

function NavBar() {
  let crestUrl = process.env.REACT_APP_BACKEND_PORTAL + "/images/YB.svg";
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
      </div>
    </>
  );
}

export default NavBar;
