import React from "react";

import logoFooter from "../../assets/logoblanc.png";
const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p> © 2020 Kasa. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
