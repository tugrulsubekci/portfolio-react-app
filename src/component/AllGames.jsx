import React  from "react";
import { useNavigate } from "react-router-dom";

function AllGames() {
    const navigate = useNavigate()

    return (
        <div className="grid-container">
            <div className="grid-item">
                <button onClick={() => navigate("rapidRender")}>
                    <img className="game-icon" src={`${process.env.PUBLIC_URL}/logos/rapid-render-logo.png`}></img>
                </button>
                <h2>Rapid render</h2>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        </div>
    );
  }
  
export default AllGames;
