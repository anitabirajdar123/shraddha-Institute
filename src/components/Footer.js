// src/components/Footer.js
import React from "react";
import "./Footer.css"; // <-- Make sure this path is correct

const Footer = () => {
  return (
    <footer>
      <p>
        CONTACT: <a href="tel:+919899511178">+91-98 995 11 178</a> |{" "}
        <a href="mailto:shiksha.abacus2007@gmail.com">shiksha.abacus2007@gmail.com</a>
      </p>
      <p>D-2/22, LGF, ARDEE CITY, SECTOR-52, GURGAON-122011</p>
      <p>&copy; 2023 SHIKSHA ABACUS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
