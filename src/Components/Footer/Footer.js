import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="justify-content-around">
      <div className="row justify-content-around footer-div col-lg-12">
        <div className="footer-id col-12 col-lg-4">
          <h3>Ready Assist</h3>
          <span>24/7 roadside assistance service provider</span>
          <br />
          <span>for bikes &amp; cars across india</span>
        </div>
        <div className="footer-id col-12 col-lg-4">
          <h3>CALL</h3>
          <span>+91 - 1234567890</span>
          <br />
          <h3>Email</h3>
          <a href="mailto:hello@readyassist.in ">hello@readyassist.in</a>
        </div>
        <div className="footer-id col-12 col-lg-4">
          <h3>Address</h3>
          <p>
            C-Dac Raintree Marg, Near Bharati Vidya Peeth, Opposite Of Kharghar
            Railway Station, Sector 7, Cbd Belapur, Mumbai, Maharashtra 400614
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
