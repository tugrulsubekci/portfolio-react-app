import React  from "react";
import "../styles/styles.css";

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-brands fa-unity"></i>
                        <h2>Unity Development</h2>
                        <ul>
                            <li>Game mechanics and algorithms</li>
                            <li>2D and 3D Animations</li>
                            <li>Multiplayer gaming and metaverse</li>
                            <li>UI development</li>
                            <li>Third party SDK integrations</li>
                        </ul>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Front-End Development</h2>
                        <ul>
                            <li>Making portfolio website</li>
                        </ul>
                        <a href="#">Learn more</a>
                    </div>
                    <div>
                        <i className="fa-sharp fa-solid fa-cube"></i>
                        <h2>Modelling and animations</h2>
                        <ul>
                            <li>Low polly modelling</li>
                            <li>Basic animations</li>
                        </ul>
                        <a href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Services;
  