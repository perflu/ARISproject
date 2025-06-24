import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <span>About</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Terms of Service</span>
        <span>|</span>
        <span>Impressum</span>
      </div>
      <div className="footer-copy">© ARIS.ai 2022 - 2025</div>
    </footer>
  );
}

export default Footer;