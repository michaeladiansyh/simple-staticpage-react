import React from "react";
import logo from "../../logo.svg";

function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} className="nav--app-logo" alt="logo" />
        <h3 className="nav--logo-text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </div>
  );
}

export default Navbar;
