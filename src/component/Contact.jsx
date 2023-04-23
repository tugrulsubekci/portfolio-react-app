import React  from "react";
import "../styles/styles.css";

function Contact() {
    return (
    <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i className="fa-solid fa-paper-plane"></i>tugrul@subekci.com</p>
                    <p><i className="fa-solid fa-phone"></i>+905524043719</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/tugrulsubekci/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/tugrulsubekci" target="_blank"><i className="fa-brands fa-square-github"></i></a>
                        <a href="https://www.instagram.com/tugrulsubekci/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    </div>
                    <a href="images/Tugrul-Subekci-Resume.pdf" download className="btn btn2">Download CV</a>
                </div>
                <div className="contact-right">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
    </div>
        
    );
  }
  
  export default Contact;
  