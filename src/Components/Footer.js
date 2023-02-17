import React from "react";
import logo2 from "../Assets/logo-bookmark.svg";
import facebook from "../Assets/icon-facebook.svg"
import twitter from '../Assets/icon-twitter.svg'
import '../Style/Footer.css'

const Footer = () => {
  return (
    <div className="foot">
      <div className="footleg">
        <img src={logo2} alt="" />
        <div className="things">
          <a href="#main"><p>FEATURES</p></a>
          <a href="#main"><p>CONTACT</p></a>
          <a href="#main"><p>CONTACT</p></a>
        </div>
      </div>
      <div >
        <img src={facebook} alt="" className="fb" />
        <img className="twt" src={twitter} alt="" />
      </div>
    </div>
  );
};
export default Footer;
