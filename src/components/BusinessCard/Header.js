import React from "react";
import Dummy from "../../images/Profil.jpg";

function Header() {
  return (
    <div className="header">
      <img src={Dummy} className="img--profile"></img>
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <h3>laurasmith.website</h3>
      <div className="btn-group">
        <button className="btn--email">Email</button>
        <button className="btn--linked">Linkedin</button>
      </div>
    </div>
  );
}

export default Header;
