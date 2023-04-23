import React  from "react";
import "../styles/styles.css";
import soccerBallRun from "../images/soccer-ball-run.png";
import connectThemAll from "../images/connect-them-all.jpg";
import helixJump from "../images/helix-jump.jpg";

function Portfolio() {
    return (
        <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={soccerBallRun} />
                    <div className="layer">
                        <h3>Soccer Ball Run</h3>
                        <p>
                            A runner game, it is about football. Download it from Google Play Store.
                        </p>
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={connectThemAll} />
                    <div className="layer">
                        <h3>Connect Them All</h3>
                        <p>
                            A puzzle game
                        </p>
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={helixJump} />
                    <div className="layer">
                        <h3>Helix Jump</h3>
                        <p>
                            A hyper-casual game which is clone
                        </p>
                        <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" className="btn">See more</a>
        </div>
    </div>
    );
  }
  
  export default Portfolio;
  