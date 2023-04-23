import React  from "react";
import "../styles/styles.css";
import logo from "../images/logo.png";

function Header() {
    const [isActive, setActive] = React.useState(false);

    function toggleMenu() {
        setActive(!isActive);
    }

    return (
        <div id="header">
        <div className="container">
            <nav>
                <img src={logo} className="logo" />
                <ul style={{right: isActive ? 0 : -200}}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fa-solid fa-xmark" onClick={toggleMenu}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
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
  