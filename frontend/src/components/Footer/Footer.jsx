import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Yum-Yum is a food delivery website offering a fast, easy, and
            reliable way to order meals online. It features a wide variety of
            restaurants and cuisines, real-time order tracking, and secure
            payments. With a clean interface and mobile-friendly design, Yam-Yam
            ensures a smooth and satisfying food ordering experience.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8919334600</li>
            <li>Contact@YUM-YUM.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © YUM-YUM.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
