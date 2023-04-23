import React, {useRef}  from "react";
import "../styles/styles.css";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const [isVisible, setVisibility] = React.useState(false);

    const [isDisabled, setDisabled] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setDisabled(true);
        setInterval(() => {
            setDisabled(false);
        }, 5000);
        
        emailjs.sendForm('service_b1xvflc', 'template_q2wqqaz', form.current, 'jPvrehj5YEWwe7AAk')
        .then((result) => {
            console.log(result.text);
            if(result.text === "OK")
                setVisibility(true);
        }, (error) => {
            console.log(error.text);
        });
    };

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
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                        <p style={{visibility: (isVisible ? "visible" : "hidden")}} >Your message has been sent</p>
                        <button type="submit" className={"btn btn2" + (isDisabled ? " disabledBtn" : "")} disabled={isDisabled}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        
    );
  }
  
  export default Contact;
  