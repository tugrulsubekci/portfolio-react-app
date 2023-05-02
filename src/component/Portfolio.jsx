import React  from "react";
import "../styles/styles.css";
import soccerBallRun from "../images/soccer-ball-run.png";
import connectThemAll from "../images/connect-them-all.jpg";
import helixJump from "../images/helix-jump.jpg";
import { Link } from "react-router-dom";

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
                        <Link to="games/soccerBallRun"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    </div>
                </div>
                <div className="work">
                    <img src={connectThemAll} />
                    <div className="layer">
                        <h3>Connect Them All</h3>
                        <p>
                            A puzzle game
                        </p>
                        <Link to="games/connectThemAll"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    </div>
                </div>
                <div className="work">
                    <img src={helixJump} />
                    <div className="layer">
                        <h3>Helix Jump</h3>
                        <p>
                            A hyper-casual game which is clone
                        </p>
                        <Link to="games/helixJump"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    </div>
                </div>
            </div>
            <Link to="games" className="btn">See more</Link>
        </div>
    </div>
    );
  }
  
  export default Portfolio;
  