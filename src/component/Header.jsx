import React  from "react";
import "../styles/styles.css";
import logo from "../images/logo.png";

function Header() {
    return (
        <div id="header">
        <div className="container">
            <nav>
                <img src={logo} className="logo" />
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fa-solid fa-xmark" onclick="closemenu()"></i>
                </ul>
                <i className="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            <div className="header-text">
                <p>Unity Developer</p>
                <h1>I'm <span>Tuğrul</span> <br />Sübekci from Turkey</h1>
            </div>
        </div>
    </div>
    );
  }
  
  export default Header;
  