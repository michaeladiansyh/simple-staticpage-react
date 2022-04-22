import React from "react";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer>
        <BsTwitter className="i--tw" /> <BsFacebook className="i--fb" />
        <BsInstagram className="i--ig" /> <BsGithub className="i--gh" />
      </footer>
    </div>
  );
}

export default Footer;
