import React from "react";
import { useNavigate } from "react-router-dom";

function GameCard(props) {
    const navigate = useNavigate()

    return(
        <div className="container-allgames">
            <img src={props.logoPath} alt='game logo' className="profile-img-allgames" />
            <h1 className="name-allgames">{props.name}</h1>
            <p className="description-allgames">{props.shortDescription}</p>
            <button onClick={() => navigate("/games/" + props.name)} className='btn-allgames'>Show details</button>
        </div>
    )
}

export default GameCard;